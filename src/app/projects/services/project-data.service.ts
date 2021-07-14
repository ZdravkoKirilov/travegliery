import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRouterService, Booking, Participant } from '@root/shared';

import { bookings, participants } from './data';
import { ProjectsService } from './projects.service';

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

  getActiveBooking(): Observable<Booking> {
    const activeBookingId = this.appRouter.getBookingId();
    return this.bookings$
      .asObservable()
      .pipe(map((bookings) => bookings[activeBookingId]));
  }
}
