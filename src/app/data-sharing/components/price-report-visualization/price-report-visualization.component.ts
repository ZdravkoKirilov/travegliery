import { Component, Input } from '@angular/core';

import { Booking } from '@root/shared';

@Component({
  selector: 'app-price-report-visualization',
  templateUrl: './price-report-visualization.component.html',
  styleUrls: ['./price-report-visualization.component.scss'],
})
export class PriceReportVisualizationComponent {
  @Input() bookings: Booking[] = [];

  getBookingTotal(booking: Booking) {
    return (booking.participants.length * booking.price).toFixed(2);
  }

  getAllBookingsTotal(bookings: Booking[]) {
    const asNumber = bookings.reduce((total, booking) => {
      total += booking.participants.length * booking.price;
      return total;
    }, 0);
    return asNumber.toFixed(2);
  }
}
