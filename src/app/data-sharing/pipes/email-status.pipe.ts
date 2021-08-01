import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { isAfter } from 'date-fns';

@Pipe({
  name: 'emailStatus',
  pure: false,
})
export class EmailStatusPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: number): string {
    const today = new Date();
    const shipmentDate = new Date(value);
    const formattedShipmentDate = this.datePipe.transform(value, 'short');

    if (isAfter(today, shipmentDate)) {
      return 'Shipped at ' + formattedShipmentDate;
    }

    return 'Ships at ' + formattedShipmentDate;
  }
}
