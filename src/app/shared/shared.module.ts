import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from './components/booking-list/booking-list.component';

@NgModule({
  declarations: [BookingListComponent],
  imports: [CommonModule],
  exports: [CommonModule, BookingListComponent],
})
export class SharedModule {}
