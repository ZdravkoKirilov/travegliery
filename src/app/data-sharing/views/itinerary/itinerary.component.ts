import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BookingGroups, ProjectDataService } from '@root/projects';
import {
  AppRouterService,
  Booking,
  ItineraryReport,
  Participant,
} from '@root/shared';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent {
  bookingGroups$: Observable<BookingGroups> = of([]);

  constructor(
    private appRouter: AppRouterService,
    private sharingService: SharingService,
    private projectDataService: ProjectDataService
  ) {
    const shareId = this.appRouter.getShareId();

    this.sharedItem = this.sharingService.getSharedItem(
      shareId
    ) as ItineraryReport;

    this.participant$ = this.projectDataService.getParticipantById(
      this.sharedItem.participantId
    );

    this.bookingGroups$ =
      this.projectDataService.getBookingGroupsByParticipantId(
        this.sharedItem.participantId
      );
  }

  participant$: Observable<Participant>;
  sharedItem: ItineraryReport | undefined;

  getBookingParticipants(booking: Booking): Observable<Participant[]> {
    return this.projectDataService.getBookingParticipants(booking.id);
  }
}
