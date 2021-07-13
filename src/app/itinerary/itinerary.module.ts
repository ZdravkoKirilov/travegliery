import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItineraryDashboardComponent } from './views/itinerary-dashboard/itinerary-dashboard.component';
import { BookingComponent } from './views/booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: ItineraryDashboardComponent,
  },
  {
    path: ':bookingId',
    component: BookingComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [ItineraryDashboardComponent, BookingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItineraryModule {}
