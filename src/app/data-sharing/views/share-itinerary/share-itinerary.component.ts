import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
  BookingGroups,
  ProjectDataService,
  ProjectsService,
} from '@root/projects';
import {
  Booking,
  MatSnackBar,
  Participant,
  Project,
  SharedItem,
} from '@root/shared';

import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-share-itinerary',
  templateUrl: './share-itinerary.component.html',
  styleUrls: ['./share-itinerary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareItineraryComponent {
  activeProject$: Observable<Project>;
  activeParticipant$: Observable<Participant>;
  bookings$: Observable<Booking[]> = of([]);
  bookingGroups$: Observable<BookingGroups> = of([]);

  constructor(
    private projectService: ProjectsService,
    private dataService: ProjectDataService,
    private sharingService: SharingService,
    private snackbar: MatSnackBar
  ) {
    this.activeProject$ = this.projectService.getActiveProject();
    this.activeParticipant$ = this.dataService.getActiveParticipant().pipe(
      tap((participant) => {
        this.bookings$ = this.dataService.getBookingsByParticipantId(
          participant.id
        );
      })
    );
    this.bookingGroups$ = this.dataService.getBookingGroupsForParticipant();
  }

  link = '';
  item?: SharedItem = undefined;

  getBookingParticipants(booking: Booking): Observable<Participant[]> {
    return this.dataService.getBookingParticipants(booking.id);
  }

  handleSave(participantId: Participant['id']) {
    const item = this.sharingService.generateItineraryReport(participantId);

    this.item = item;
    this.link = this.sharingService.getItemLink(item);
  }

  handleShare(emails: string[], participantId: Participant['id']) {
    if (!this.item) {
      const item = this.sharingService.generateItineraryReport(participantId);
      this.link = this.sharingService.getItemLink(item);
      this.item = item;
    }
    this.sharingService.generateEmail(this.item.id, emails);
    this.snackbar.open('Email sent!', '', { duration: 3000 });
  }
}
