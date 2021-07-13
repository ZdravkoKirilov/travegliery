import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRouterService, Booking, Participant } from '@root/shared';

import { bookings, participants } from './data';

@Injectable()
export class ProjectDataService {
  constructor(private appRouter: AppRouterService) {}

  private participants$ = new BehaviorSubject<Record<string, Participant>>(
    participants
  );

  private bookings$ = new BehaviorSubject<Record<string, Booking>>(bookings);

  getParticipants(): Observable<Participant[]> {
    return this.participants$
      .asObservable()
      .pipe(map((data) => Object.values(data)));
  }

  getActiveParticipant(): Observable<Participant> {
    const activeParticipantId = this.appRouter.getParticipantId();
    return this.participants$
      .asObservable()
      .pipe(map((participants) => participants[activeParticipantId]));
  }

  getBookings(): Observable<Booking[]> {
    return this.bookings$
      .asObservable()
      .pipe(map((data) => Object.values(data)));
  }

  getActivePBooking(): Observable<Booking> {
    const activeBookingId = this.appRouter.getBookingId();
    return this.bookings$
      .asObservable()
      .pipe(map((bookings) => bookings[activeBookingId]));
  }
}
