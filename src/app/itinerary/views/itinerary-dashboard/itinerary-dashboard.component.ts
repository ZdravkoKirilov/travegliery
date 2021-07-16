import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookingGroups, ProjectDataService } from '@root/projects';
import { Booking } from '@root/shared';

@Component({
  selector: 'app-itinerary-dashboard',
  templateUrl: './itinerary-dashboard.component.html',
  styleUrls: ['./itinerary-dashboard.component.scss'],
})
export class ItineraryDashboardComponent implements OnInit {
  bookings$: Observable<Booking[]>;

  bookingGroups$: Observable<BookingGroups>;

  constructor(private dataService: ProjectDataService) {
    this.bookings$ = this.dataService.getBookings();
    this.bookingGroups$ = this.dataService.getBookingGroupsByDate();
  }

  ngOnInit(): void {}
}
