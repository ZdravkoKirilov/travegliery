import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { BookingGroups } from '@root/projects';

@Component({
  selector: 'app-booking-list[bookings]',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingListComponent {
  @Input() bookings: BookingGroups = [];
}
