import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { isBefore, isAfter } from 'date-fns';

import {
  AppRouterService,
  Booking,
  SharedItem,
  Email,
  Participant,
  PriceReport,
  BookingReport,
  ItineraryReport,
} from '@root/shared';
import { environment } from 'src/environments/environment';

@Injectable()
export class SharingService {
  constructor(private appRouter: AppRouterService) {
    const itemsFromLocalStorage = JSON.parse(
      localStorage.getItem('sharedItems') || '{}'
    );
    this._items$.next(itemsFromLocalStorage);

    const emailsFromLocalStorage = JSON.parse(
      localStorage.getItem('emails') || '{}'
    );
    this._emails$.next(emailsFromLocalStorage);
  }

  private _items$ = new BehaviorSubject<Record<SharedItem['id'], SharedItem>>(
    {}
  );

  private _emails$ = new BehaviorSubject<Record<Email['id'], Email>>({});

  items$ = this._items$.pipe(
    map((items) => {
      const projectId = this.appRouter.getProjectId();
      return Object.values(items)
        .filter((elem) => elem.projectId === projectId)
        .sort((a, b) => {
          if (isAfter(a.createdAt, b.createdAt)) {
            return -1;
          }
          if (isBefore(a.createdAt, b.createdAt)) {
            return 1;
          }
          return 0;
        });
    })
  );
  emails$ = this._emails$.pipe(
    map((emails) => {
      const projectId = this.appRouter.getProjectId();
      return Object.values(emails)
        .filter((elem) => elem.projectId === projectId)
        .sort((a, b) => {
          if (isAfter(a.createdAt, b.createdAt)) {
            return -1;
          }
          if (isBefore(a.createdAt, b.createdAt)) {
            return 1;
          }
          return 0;
        });
    })
  );

  deleteSharedItem(itemId: SharedItem['id']) {
    const currentItems = { ...this._items$.getValue() };
    delete currentItems[itemId];

    localStorage.setItem('sharedItems', JSON.stringify(currentItems));

    this._items$.next(currentItems);
  }

  deleteEmail(emailId: Email['id']) {
    const currentEmails = { ...this._emails$.getValue() };
    delete currentEmails[emailId];

    localStorage.setItem('emails', JSON.stringify(currentEmails));

    this._emails$.next(currentEmails);
  }

  generatePriceReport(bookingIds: Array<Booking['id']>): PriceReport {
    const nanoId = nanoid();
    const projectId = this.appRouter.getProjectId();

    const item = {
      id: nanoId,
      type: 'price-report' as const,
      bookingIds,
      projectId,
      createdAt: new Date().getTime(),
    };

    this._items$.next({
      ...this._items$.getValue(),
      [item.id]: item,
    });

    localStorage.setItem(
      'sharedItems',
      JSON.stringify(this._items$.getValue())
    );

    return item;
  }

  generateBookingReport(bookingId: Booking['id']): BookingReport {
    const nanoId = nanoid();
    const projectId = this.appRouter.getProjectId();

    const item = {
      id: nanoId,
      type: 'booking' as const,
      bookingId,
      projectId,
      createdAt: new Date().getTime(),
    };

    this._items$.next({
      ...this._items$.getValue(),
      [item.id]: item,
    });

    localStorage.setItem(
      'sharedItems',
      JSON.stringify(this._items$.getValue())
    );

    return item;
  }

  generateItineraryReport(participantId: Participant['id']): ItineraryReport {
    const nanoId = nanoid();
    const projectId = this.appRouter.getProjectId();

    const item = {
      id: nanoId,
      type: 'itinerary' as const,
      participantId,
      projectId,
      createdAt: new Date().getTime(),
    };

    this._items$.next({
      ...this._items$.getValue(),
      [item.id]: item,
    });

    localStorage.setItem(
      'sharedItems',
      JSON.stringify(this._items$.getValue())
    );

    return item;
  }

  generateEmail(
    shareId: SharedItem['id'],
    recipients: string[],
    sendAt?: number
  ): Email {
    const projectId = this.appRouter.getProjectId();
    const creationDate = new Date().getTime();

    const item = {
      id: nanoid(),
      projectId,
      shareId,
      sendAt: sendAt || creationDate,
      createdAt: creationDate,
      recipients,
    };

    this._emails$.next({
      ...this._emails$.getValue(),
      [item.id]: item,
    });

    localStorage.setItem('emails', JSON.stringify(this._emails$.getValue()));

    return item;
  }

  getItemLink(item: SharedItem): string {
    const host = environment.currentHost;
    const projectId = this.appRouter.getProjectId();

    if (item.type === 'price-report') {
      return `${host}/projects/${projectId}/sharing/pricing/view/${item.id}`;
    }

    if (item.type === 'booking') {
      return `${host}/projects/${projectId}/sharing/booking/view/${item.id}`;
    }

    if (item.type === 'itinerary') {
      return `${host}/projects/${projectId}/sharing/itinerary/view/${item.id}`;
    }

    return '';
  }

  getSharedItem(itemId: SharedItem['id']) {
    return this._items$.getValue()[itemId];
  }
}
