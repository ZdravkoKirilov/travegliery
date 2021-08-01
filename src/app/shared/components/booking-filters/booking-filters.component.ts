import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { isValid, parseISO } from 'date-fns';

import { Participant } from '../../types';
import { OnChange } from '../../helpers';
import { AppRouterService } from '../../services/router/app-router.service';

@Component({
  selector: 'app-booking-filters',
  templateUrl: './booking-filters.component.html',
  styleUrls: ['./booking-filters.component.scss'],
})
export class BookingFiltersComponent implements OnInit {
  constructor(private appRouter: AppRouterService) {}

  showFilters = false;
  @OnChange<string, BookingFiltersComponent>((value, self) => {
    if (self.participantFilter$) {
      self.participantFilter$.next(value);
    }
  })
  participantFilter: string = '';

  participantFilter$ = new BehaviorSubject('');
  displayedParticipants$: Observable<Participant[]> = of([]);

  @Input() participants: Observable<Participant[]> = of([]);
  filteredParticipantOptions$: Observable<Participant[]> = of([]);

  selectedParticipantIds$ = new BehaviorSubject<string[]>([]);

  fromDate = '';
  toDate = '';

  ngOnInit() {
    this.displayedParticipants$ = this.selectedParticipantIds$.pipe(
      withLatestFrom(this.participants),
      map(([selectedIds, participants]) => {
        return participants.filter((elem) => selectedIds.includes(elem.id));
      })
    );

    this.filteredParticipantOptions$ = this.participantFilter$.pipe(
      withLatestFrom(this.participants),
      map(([filterValue, allParticipants]) => {
        return allParticipants.filter((elem) => {
          return (
            elem.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
            elem.lastName.toLowerCase().includes(filterValue.toLowerCase())
          );
        });
      })
    );

    this.prepopulateDates();
    this.prepopulateParticipants();
  }

  clearDate(type: 'from' | 'to') {
    if (type === 'from') {
      this.fromDate = '';
    }
    if (type === 'to') {
      this.toDate = '';
    }
  }

  getAppliedFiltersCount() {
    let total = 0;

    if (this.selectedParticipantIds$.getValue().length) {
      total += 1;
    }
    if (this.fromDate) {
      total += 1;
    }
    if (this.toDate) {
      total += 1;
    }

    return total > 0 ? `(${total})` : '';
  }

  applyFilters() {
    this.appRouter.addQueryParams({
      participantId: this.selectedParticipantIds$.getValue(),
      fromDate: this.fromDate,
      toDate: this.toDate,
    });
    this.showFilters = false;
  }

  prepopulateParticipants() {
    const routeData = this.appRouter.getRouteData();
    const participantIds = routeData.queryParams['participantId'];
    let deductedFromUrl: string[] = [];

    if (typeof participantIds === 'string') {
      deductedFromUrl = [participantIds];
    }

    if (Array.isArray(participantIds)) {
      deductedFromUrl = [...participantIds];
    }

    this.selectedParticipantIds$.next(deductedFromUrl);
  }

  prepopulateDates() {
    const routeData = this.appRouter.getRouteData();

    const fromDate = parseISO(routeData.queryParams['fromDate']);
    if (isValid(fromDate)) {
      this.fromDate = routeData.queryParams['fromDate'];
    }

    const toDate = parseISO(routeData.queryParams['toDate']);
    if (isValid(toDate)) {
      this.toDate = routeData.queryParams['toDate'];
    }
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  toggleParticipant(participantId: string) {
    const selectedParticipantIds = this.selectedParticipantIds$.getValue();

    if (selectedParticipantIds.includes(participantId)) {
      this.selectedParticipantIds$.next(
        selectedParticipantIds.filter((elem) => elem !== participantId)
      );
    } else {
      this.selectedParticipantIds$.next([
        ...selectedParticipantIds,
        participantId,
      ]);
    }

    setTimeout(() => {
      this.participantFilter = '';
    });
  }
}
