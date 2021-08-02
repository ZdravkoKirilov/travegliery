import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Params } from '@angular/router';

import {
  BookingGroups,
  ProjectDataService,
  ProjectsService,
} from '@root/projects';
import { AppRouterService, Participant, Project } from '@root/shared';

@Component({
  selector: 'app-itinerary-dashboard',
  templateUrl: './itinerary-dashboard.component.html',
  styleUrls: ['./itinerary-dashboard.component.scss'],
})
export class ItineraryDashboardComponent implements OnInit {
  bookingGroups$: Observable<BookingGroups> = of([]);
  activeProject$: Observable<Project>;
  participants$: Observable<Participant[]>;

  bookingFilters$: Observable<Params>;

  constructor(
    private dataService: ProjectDataService,
    private projectService: ProjectsService,
    private appRouter: AppRouterService
  ) {
    this.bookingGroups$ = this.dataService.getBookingGroupsByDate();
    this.activeProject$ = this.projectService.getActiveProject();
    this.participants$ = this.dataService.getParticipants();
    this.bookingFilters$ = this.appRouter.getItineraryParams();
  }

  ngOnInit(): void {}
}
