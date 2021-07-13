import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRouterService, Booking, Participant } from '@root/shared';

import { bookings, participants } from './data';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  constructor(private appRouter: AppRouterService) {}

  private participants$ = new BehaviorSubject<Record<string, Participant>>(
    participants
  );

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

  private bookings$ = new BehaviorSubject<Record<string, Booking>>(bookings);

  getBookings(): Observable<Booking[]> {
    return this.bookings$
      .asObservable()
      .pipe(map((data) => Object.values(data)));
  }
}
