import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Participant } from '@root/shared';

const participants: Record<string, Participant> = {
  "1": {
    firstName: "John",
    lastName: "Simmons",
    email: "johns@gmail.com"
  },
  "2": {
    firstName: "Jean",
    lastName: "Tennesy",
    email: "jeant@hotmail.com",
    phone: "441235995"
  },
  "3": {
    firstName: "Eric",
    lastName: "Gartner",
    email: "ericg@hotmail.com",
    phone: "4412295677"
  },
  "4": {
    firstName: "Vanessa",
    lastName: "Hughes",
    email: "vanhughes@gmail.com",
  },
  "5": {
    firstName: 'Patrick',
    lastName: 'Rothfuss',
    email: 'nottodaypat@yahoo.com'
  },
  "6": {
    firstName: 'Patricia',
    lastName: 'Gates',
    email: 'patgates55@yahoo.com'
  },
  "7": {
    firstName: 'Ivan',
    lastName: 'Orlov',
    email: 'luckychicken@gmail.com'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor() { }

  private participants$ = new BehaviorSubject<Record<string, Participant>>(participants);

  getParticipants(): Observable<Participant[]> {
    return this.participants$
      .asObservable()
      .pipe(map((data) => Object.values(data)));
  }
}
