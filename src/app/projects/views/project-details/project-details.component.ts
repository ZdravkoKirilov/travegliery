import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { isPast, isFuture, isToday } from 'date-fns';
import { map } from 'rxjs/operators';

import { Booking, Project } from '@root/shared';

import { ProjectsService } from '../../services/projects.service';
import { ProjectDataService } from '../../services/project-data.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  project$: Observable<Project>;

  pastBookings$: Observable<Booking[]>;
  todayBookings$: Observable<Booking[]>;
  upcomingBookings$: Observable<Booking[]>;

  constructor(
    private projectService: ProjectsService,
    private projectDataService: ProjectDataService
  ) {
    this.project$ = this.projectService.getActiveProject();

    this.pastBookings$ = this.projectDataService.getBookings().pipe(
      map((bookings) =>
        bookings.filter(
          (booking) =>
            !isToday(new Date(booking.startDate)) &&
            isPast(new Date(booking.startDate))
        )
      ),
      map((bookings) => bookings.slice(0, 3))
    );

    this.todayBookings$ = this.projectDataService.getBookings().pipe(
      map((bookings) =>
        bookings.filter((booking) => isToday(new Date(booking.startDate)))
      ),
      map((bookings) => bookings.slice(0, 3))
    );

    this.upcomingBookings$ = this.projectDataService.getBookings().pipe(
      map((bookings) =>
        bookings.filter(
          (booking) =>
            !isToday(new Date(booking.startDate)) &&
            isFuture(new Date(booking.startDate))
        )
      ),
      map((bookings) => bookings.slice(0, 3))
    );
  }
}
