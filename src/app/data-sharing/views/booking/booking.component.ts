import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AppRouterService, Booking, SharedItem } from '@root/shared';
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

    this.sharedItem = this.sharingService.getSharedItem(shareId);

    this.booking$ = this.projectDataService.getBookingById(
      this.sharedItem.bookingIds[0]
    );
  }

  booking$?: Observable<Booking>;
  sharedItem: SharedItem | undefined;
}
