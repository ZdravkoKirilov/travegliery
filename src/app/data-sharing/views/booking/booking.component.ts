import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  AppRouterService,
  Booking,
  BookingReport,
  Participant,
  SharedItem,
} from '@root/shared';
import { ProjectDataService } from '@root/projects';

import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  constructor(
    private appRouter: AppRouterService,
    private sharingService: SharingService,
    private projectDataService: ProjectDataService
  ) {
    const shareId = this.appRouter.getShareId();

    this.sharedItem = this.sharingService.getSharedItem(
      shareId
    ) as BookingReport;

    this.booking$ = this.projectDataService.getBookingById(
      this.sharedItem.bookingId
    );

    this.participants$ = this.projectDataService.getParticipants();
  }

  booking$?: Observable<Booking>;
  participants$: Observable<Participant[]> = of([]);
  sharedItem: BookingReport | undefined;
}
