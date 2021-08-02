import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProjectDataService, ProjectsService } from '@root/projects';
import { Booking, Project } from '@root/shared';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-price-report',
  templateUrl: './price-report.component.html',
  styleUrls: ['./price-report.component.scss'],
})
export class PriceReportComponent {
  activeProject$: Observable<Project>;
  bookings$: Observable<Booking[]> = of([]);

  constructor(
    private projectService: ProjectsService,
    private dataService: ProjectDataService
  ) {
    this.activeProject$ = this.projectService.getActiveProject();
    this.bookings$ = this.dataService
      .getFilteredBookings()
      .pipe(map(this.dataService.sortBookings));
  }

  handleSave(payload: { sendEmail: boolean }) {
    console.log(payload);
  }
}
