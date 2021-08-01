import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ProjectDataService, ProjectsService } from '@root/projects';
import { Booking, Project } from '@root/shared';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-price-report',
  templateUrl: './price-report.component.html',
  styleUrls: ['./price-report.component.scss'],
})
export class PriceReportComponent {
  activeProject$: Observable<Project>;
  bookings$: Observable<Booking[]> = of([]);
  participantEmails$: Observable<string[]> = of([]);

  constructor(
    private projectService: ProjectsService,
    private dataService: ProjectDataService
  ) {
    this.activeProject$ = this.projectService.getActiveProject();
    this.bookings$ = this.dataService
      .getFilteredBookings()
      .pipe(map(this.dataService.sortBookings));
    this.participantEmails$ = this.dataService.getFilteredBookings().pipe(
      withLatestFrom(this.dataService.getParticipants()),
      map(([bookings, participants]) => {
        const participantIds = Array.from(
          new Set(
            bookings.reduce<string[]>((total, booking) => {
              total = [...total, ...booking.participants];
              return total;
            }, [])
          )
        );
        return participants
          .filter((participant) => participantIds.includes(participant.id))
          .map((participant) => participant.email);
      })
    );
  }

  handleSave() {}

  handleShare(emails: string[]) {}
}
