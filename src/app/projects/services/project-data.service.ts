import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { isAfter } from 'date-fns';

import { AppRouterService, Booking, Participant } from '@root/shared';

import { bookings, participants } from './data';
import { ProjectsService } from './projects.service';

export type BookingGroups = Array<{ date: string; bookings: Booking[] }>;
@Injectable()
export class ProjectDataService {
  constructor(
    private appRouter: AppRouterService,
    private projectService: ProjectsService
  ) {}

  private participants$ = new BehaviorSubject<Record<string, Participant>>(
    participants
  );

  private bookings$ = new BehaviorSubject<Record<string, Booking>>(bookings);

  getParticipants(): Observable<Participant[]> {
    return combineLatest([
      this.participants$,
      this.projectService.getActiveProject(),
    ]).pipe(
      map(([participants, activeProject]) => {
        return Object.values(participants).filter(
          (pt) => pt.projectId === activeProject?.id
        );
      })
    );
  }

  getActiveParticipant(): Observable<Participant> {
    const activeParticipantId = this.appRouter.getParticipantId();
    return this.participants$
      .asObservable()
      .pipe(map((participants) => participants[activeParticipantId]));
  }

  getBookings(): Observable<Booking[]> {
    return combineLatest([
      this.bookings$,
      this.projectService.getActiveProject(),
    ]).pipe(
      map(([bookings, activeProject]) => {
        return Object.values(bookings).filter(
          (bk) => bk.projectId === activeProject?.id
        );
      })
    );
  }

  getBookingGroupsByDate(): Observable<BookingGroups> {
    return this.getBookings().pipe(
      map((bookings) =>
        bookings.reduce((acc, item) => {
          const startDate = item.startDate;
          const endDate = item.endDate;

          const isMultiDayEvent = startDate !== endDate;

          const startGroup = acc[startDate] || [];
          const endGroup = acc[endDate] || [];

          startGroup.push(item);

          if (isMultiDayEvent) {
            endGroup.push(item);
          }

          acc[startDate] = startGroup;

          if (isMultiDayEvent) {
            acc[endDate] = endGroup;
          }

          return acc;
        }, {} as Record<string, Booking[]>)
      ),
      map((groupedBookings) => {
        return Object.keys(groupedBookings).map((date) => {
          return {
            date,
            bookings: groupedBookings[date],
          };
        });
      }),
      map((bookings) =>
        bookings.sort((a, b) => {
          const date1 = new Date(a.date);
          const date2 = new Date(b.date);
          if (isAfter(date1, date2)) {
            return 1;
          }
          if (isAfter(date2, date1)) {
            return -1;
          }
          return 0;
        })
      )
    );
  }

  getActiveBooking(): Observable<Booking> {
    const activeBookingId = this.appRouter.getBookingId();
    return this.bookings$
      .asObservable()
      .pipe(map((bookings) => bookings[activeBookingId]));
  }
}
