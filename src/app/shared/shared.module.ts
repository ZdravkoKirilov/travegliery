import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingListComponent } from './components/booking-list/booking-list.component';

@NgModule({
  declarations: [BookingListComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, BookingListComponent],
})
export class SharedModule {}
