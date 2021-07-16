import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingListComponent } from './components/booking-list/booking-list.component';
import { AuthenticatedHeaderComponent } from './components/authenticated-header/authenticated-header.component';

@NgModule({
  declarations: [BookingListComponent, AuthenticatedHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [CommonModule, BookingListComponent, AuthenticatedHeaderComponent],
})
export class SharedModule {}
