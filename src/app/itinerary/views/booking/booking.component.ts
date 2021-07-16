import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppRouterService, Booking, Project } from '@root/shared';
import { ProjectDataService, ProjectsService } from '@root/projects';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  booking$: Observable<Booking>;
  activeProject$: Observable<Project>;

  constructor(
    private dataService: ProjectDataService,
    private projectService: ProjectsService,
    public appRouter: AppRouterService,
  ) {
    this.booking$ = this.dataService.getActiveBooking();
    this.activeProject$ = this.projectService.getActiveProject();
  }

  ngOnInit(): void {}
}
