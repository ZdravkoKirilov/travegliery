import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Booking } from '@root/shared';
import { ProjectDataService } from '@root/projects';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  booking$: Observable<Booking>;

  constructor(private dataService: ProjectDataService) {
    this.booking$ = this.dataService.getActivePBooking();
  }

  ngOnInit(): void {}
}
