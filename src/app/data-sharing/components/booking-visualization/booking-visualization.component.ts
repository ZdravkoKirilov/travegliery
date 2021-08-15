import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Booking, Participant } from '@root/shared';

@Component({
  selector: 'app-booking-visualization',
  templateUrl: './booking-visualization.component.html',
  styleUrls: ['./booking-visualization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingVisualizationComponent {
  @Input() booking?: Booking;
  @Input() participants: Participant[] = [];
}
