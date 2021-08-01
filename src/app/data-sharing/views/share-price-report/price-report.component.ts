import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

import { ProjectDataService, ProjectsService } from '@root/projects';
import { Booking, MatSnackBar, Project, SharedItem } from '@root/shared';

import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-share-price-report',
  templateUrl: './price-report.component.html',
  styleUrls: ['./price-report.component.scss'],
})
export class SharePriceReportComponent {
  activeProject$: Observable<Project>;
  bookings$: Observable<Booking[]> = of([]);
  participantEmails$: Observable<string[]> = of([]);

  link = '';
  item?: SharedItem = undefined;

  constructor(
    private projectService: ProjectsService,
    private dataService: ProjectDataService,
    private sharingService: SharingService,
    private snackbar: MatSnackBar
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

  handleSave(bookings: Booking[]) {
    const item = this.sharingService.generatePriceReport(
      bookings.map((elem) => elem.id)
    );

    this.item = item;
    this.link = this.sharingService.getItemLink(item);
  }

  handleShare(emails: string[], bookings: Booking[]) {
    if (!this.item) {
      const item = this.sharingService.generatePriceReport(
        bookings.map((elem) => elem.id)
      );
      this.link = this.sharingService.getItemLink(item);
      this.item = item;
    }
    this.sharingService.generateEmail(this.item.id, emails);
    this.snackbar.open('Email sent!', '', { duration: 3000 });
  }
}
