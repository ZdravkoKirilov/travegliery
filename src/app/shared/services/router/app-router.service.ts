import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type RouteData = {
  key: string;
};

export const BookingFilters = {
  fromDate: 'fromDate',
  toDate: 'toDate',
  participantId: 'participantId',
};

export type BookingFilters = {
  fromDate: string;
  toDate: string;
  participantId: string | string[];
};

@Injectable({
  providedIn: 'root',
})
export class AppRouterService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToHome() {
    return this.router.navigate(['/projects']);
  }

  goToLogin() {
    return this.router.navigate(['/auth']);
  }

  getProjectId() {
    const data = this.getRouteData();
    const projectId: string = data.params['projectId'];
    return projectId;
  }

  getParticipantId() {
    const data = this.getRouteData();
    const participantId: string = data.params['participantId'];
    return participantId;
  }

  getBookingId() {
    const data = this.getRouteData();
    const bookingId: string = data.params['bookingId'];
    return bookingId;
  }

  getShareId() {
    const data = this.getRouteData();
    const shareId: string = data.params['shareId'];
    return shareId;
  }

  getRouteData() {
    let route = this.activatedRoute.snapshot.root;
    let params = { ...route.params };
    let data = route.data as RouteData;

    while (route.firstChild) {
      route = route.firstChild;
      params = { ...params, ...route.params };
      data = { ...data, ...route.data };
    }
    data = { ...data, ...route.data };

    const {
      url,
      root: { queryParams },
    } = this.activatedRoute.snapshot;

    return { url, params, queryParams, data };
  }

  getItineraryParams(): Observable<BookingFilters> {
    return this.activatedRoute.queryParams.pipe(
      map((currentParams) => ({
        fromDate: currentParams['fromDate'],
        toDate: currentParams['toDate'],
        participantId: currentParams['participantId'],
      }))
    );
  }

  isRouteActive(key: RouteData['key']) {
    const state = this.getRouteData();
    return state.data?.key === key;
  }

  addQueryParams(params: Record<string, unknown>) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: params,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }
}
