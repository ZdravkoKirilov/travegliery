import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

import {
  Booking,
  MatSnackBar,
  Participant,
  Project,
  SharedItem,
} from '@root/shared';
import { ProjectDataService, ProjectsService } from '@root/projects';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-share-booking',
  templateUrl: './share-booking.component.html',
  styleUrls: ['./share-booking.component.scss'],
})
export class ShareBookingComponent {
  activeProject$: Observable<Project>;

  booking$: Observable<Booking>;
  participantEmails$: Observable<string[]> = of([]);
  participants$: Observable<Participant[]> = of([]);

  link = '';
  item?: SharedItem = undefined;

  constructor(
    private projectService: ProjectsService,
    private projectDataService: ProjectDataService,
    private sharingService: SharingService,
    private snackbar: MatSnackBar
  ) {
    this.activeProject$ = this.projectService.getActiveProject();
    this.booking$ = this.projectDataService.getActiveBooking();
    this.participants$ = this.projectDataService.getParticipants();

    this.participantEmails$ = this.booking$.pipe(
      withLatestFrom(this.projectDataService.getParticipants()),
      map(([booking, participants]) => {
        return participants
          .filter((participant) =>
            booking.participants.includes(participant.id)
          )
          .map((participant) => participant.email);
      })
    );
  }

  handleSave(booking: Booking) {
    const item = this.sharingService.generateBookingReport(booking.id);

    this.item = item;
    this.link = this.sharingService.getItemLink(item);
  }

  handleShare(emails: string[], booking: Booking) {
    if (!this.item) {
      const item = this.sharingService.generateBookingReport(booking.id);
      this.link = this.sharingService.getItemLink(item);
      this.item = item;
    }
    this.sharingService.generateEmail(this.item.id, emails);
    this.snackbar.open('Email sent!', '', { duration: 3000 });
  }
}
