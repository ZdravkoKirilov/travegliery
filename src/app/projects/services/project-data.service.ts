import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
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

  private _favoriteParticipants$ = new BehaviorSubject<string[]>(['1']);

  public favoriteParticipants$ = this._favoriteParticipants$.asObservable();

  addToFavorites(participantId: Participant['id']) {
    return this.favoriteParticipants$.pipe(
      take(1),
      map((favorites) => {
        const newFavorites = [...favorites, participantId];
        this._favoriteParticipants$.next(newFavorites);
        return newFavorites;
      })
    );
  }

  removeFromFavorites(participantId: Participant['id']) {
    return this.favoriteParticipants$.pipe(
      take(1),
      map((favorites) => {
        const newFavorites = favorites.filter((elem) => elem !== participantId);
        this._favoriteParticipants$.next(newFavorites);
        return newFavorites;
      })
    );
  }

  getParticipants(): Observable<Participant[]> {
    return combineLatest([
      this.participants$,
      this.projectService.getActiveProject(),
    ]).pipe(
      map(([participants, activeProject]) => {
        return Object.values(participants).filter(
          (pt) => pt.projectId === activeProject?.id
        );
      }),
      map(this.sortParticipantsByName),
      map(this.sortParticipantsByFavorites)
    );
  }

  getBookingParticipants(bookingId: Booking['id']): Observable<Participant[]> {
    return combineLatest([
      this.getParticipants(),
      this.getBookingById(bookingId),
    ]).pipe(
      map(([participants, booking]) => {
        return participants.filter((item) =>
          booking.participants.includes(item.id)
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

  getBookingsByParticipantId(
    participantId: Participant['id']
  ): Observable<Booking[]> {
    return this.getBookings().pipe(
      map((bookings) =>
        bookings.filter((booking) =>
          booking.participants.includes(participantId)
        )
      )
    );
  }

  createBookingGroups(bookings: Booking[]): BookingGroups {
    const byDate = bookings.reduce((acc, item) => {
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
    }, {} as Record<string, Booking[]>);

    return Object.keys(byDate).map((date) => {
      return {
        date,
        bookings: byDate[date],
      };
    });
  }

  getBookingGroupsByDate(): Observable<BookingGroups> {
    return this.getBookings().pipe(
      map(this.createBookingGroups),
      map(this.sortBookingGroups)
    );
  }

  getBookingGroupsForParticipant(): Observable<BookingGroups> {
    return this.getActiveParticipant().pipe(
      switchMap((participant) =>
        this.getBookingsByParticipantId(participant.id)
      ),
      map((bookings) => this.createBookingGroups(bookings)),
      map(this.sortBookingGroups)
    );
  }

  sortParticipantsByName(participants: Participant[]): Participant[] {
    return [...participants].sort((a, b) => {
      const char1 = a.firstName.charAt(0);
      const char2 = b.firstName.charAt(0);
      if (char1 > char2) {
        return 1;
      }
      if (char2 > char1) {
        return -1;
      }
      return 0;
    });
  }

  sortParticipantsByFavorites = (
    participants: Participant[]
  ): Participant[] => {
    const favorites = this._favoriteParticipants$.getValue();

    return [...participants].sort((a, b) => {
      const firstIsFavorite = favorites.includes(a.id);
      const secondIsFavorite = favorites.includes(b.id);

      if (firstIsFavorite && !secondIsFavorite) {
        return -1;
      }

      if (secondIsFavorite && !firstIsFavorite) {
        return 1;
      }

      return 0;
    });
  };

  sortBookingGroups(bookings: BookingGroups): BookingGroups {
    return [...bookings].sort((a, b) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);
      if (isAfter(date1, date2)) {
        return 1;
      }
      if (isAfter(date2, date1)) {
        return -1;
      }
      return 0;
    });
  }

  getActiveBooking(): Observable<Booking> {
    const activeBookingId = this.appRouter.getBookingId();
    return this.bookings$
      .asObservable()
      .pipe(map((bookings) => bookings[activeBookingId]));
  }

  getBookingById(bookingId: Booking['id']): Observable<Booking> {
    return this.bookings$
      .asObservable()
      .pipe(map((bookings) => bookings[bookingId]));
  }
}
