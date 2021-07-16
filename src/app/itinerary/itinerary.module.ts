import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItineraryDashboardComponent } from './views/itinerary-dashboard/itinerary-dashboard.component';
import { BookingComponent } from './views/booking/booking.component';
import { SharedModule } from '@root/shared';

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
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItineraryModule {}
