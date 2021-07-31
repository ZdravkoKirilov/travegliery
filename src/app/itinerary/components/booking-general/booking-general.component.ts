import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectDataService } from '@root/projects';
import { Booking, MatSnackBar } from '@root/shared';
@Component({
  selector: 'app-booking-general',
  templateUrl: './booking-general.component.html',
  styleUrls: ['./booking-general.component.scss'],
})
export class BookingGeneralComponent {
  booking$: Observable<Booking>;

  constructor(
    private dataService: ProjectDataService,
    private snackbar: MatSnackBar
  ) {
    this.booking$ = dataService.getActiveBooking();
  }

  onCopy(target: string) {
    this.snackbar.open(`${target} copied to clipboard!`, '', {
      duration: 3000,
    });
  }

  getTotalPrice(booking: Booking) {
    return booking.participants.reduce((total) => {
      total += booking.price;
      return total;
    }, 0);
  }
}
