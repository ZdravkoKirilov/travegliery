import { Pipe, PipeTransform } from '@angular/core';

import { SharedItem } from '@root/shared';

@Pipe({
  name: 'sharingType',
})
export class SharingTypePipe implements PipeTransform {
  transform(value: SharedItem['type'] | undefined | null): unknown {
    switch (value) {
      case 'itinerary':
        return 'Traveler itinerary';
      case 'price-report':
        return 'Price report';
      case 'booking':
        return 'Booking';
      default:
        return 'Unknown';
    }
  }
}
