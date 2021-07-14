import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Booking, Project } from '@root/shared';
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
    private projectService: ProjectsService
  ) {
    this.booking$ = this.dataService.getActiveBooking();
    this.activeProject$ = this.projectService.getActiveProject();
  }

  ngOnInit(): void {}
}
