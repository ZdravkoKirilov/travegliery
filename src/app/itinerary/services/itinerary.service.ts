import { Injectable } from '@angular/core';

import { Booking } from '@root/shared';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const bookings: Record<string, Booking> = {
  "1": {
    type: 'flight',
    start: '29-09-2021: 11:30',
    end: '29-09-2021: 13:25',
    provider: 'Austrian airlines',
    participants: ["1", "2"],
    from: "London - Heathrow",
    to: "Paris De Gaul"
  },
  "2": {
    type: 'hotel',
    start: '30-09-2021: 14:00',
    end: '31-09-2021: 12:00',
    provider: 'Sofia grand hotel',
    participants: ["1", "2", "6"],
    city: 'Sofia',
    address: 'Tsar Osvoboditel 13'
  },
  "3": {
    type: 'ferry',
    start: '01-10-2021: 14:00',
    end: '01-10-2021: 16:00',
    provider: 'Sharky fella',
    participants: ["5", "7"],
    from: "Istanbul port 1",
    to: "Istanbul port 2"
  },
  "4": {
    type: 'train',
    start: '03-10-2021: 09:00',
    end: '03-10-2021: 19:00',
    provider: 'Old Tomm',
    participants: ["3", "4"],
    from: "Moscow",
    to: "St Petersburg"
  },
};

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  private bookings$ = new BehaviorSubject<Record<string, Booking>>(bookings);

  getBookings(): Observable<Booking[]> {
    return this.bookings$
      .asObservable()
      .pipe(map((data) => Object.values(data)));
  }
}
