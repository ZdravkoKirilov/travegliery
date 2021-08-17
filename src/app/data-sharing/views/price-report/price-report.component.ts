import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRouterService, Booking, PriceReport } from '@root/shared';
import { ProjectDataService } from '@root/projects';

import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-price-report',
  templateUrl: './price-report.component.html',
  styleUrls: ['./price-report.component.scss'],
})
export class PriceReportComponent {
  constructor(
    private dataService: ProjectDataService,
    private sharingService: SharingService,
    private appRouter: AppRouterService
  ) {
    this.bookings$ = this.dataService.getBookings().pipe(
      map((bookings) => {
        const shareId = this.appRouter.getShareId();
        const sharedItem = this.sharingService.getSharedItem(
          shareId
        ) as PriceReport;
        this.sharedItem = sharedItem;

        return bookings.filter((booking) =>
          sharedItem.bookingIds.includes(booking.id)
        );
      })
    );
  }

  sharedItem: PriceReport | undefined;

  bookings$: Observable<Booking[]> = of([]);
}
