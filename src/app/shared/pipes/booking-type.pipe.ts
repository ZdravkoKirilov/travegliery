import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../types';

@Pipe({
  name: 'bookingType',
})
export class BookingTypePipe implements PipeTransform {
  transform(value: Booking['type']): string {
    switch (value) {
      case 'flight':
        return 'plane';
      default:
        return value;
    }
  }
}
