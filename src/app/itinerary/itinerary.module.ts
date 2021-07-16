import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@root/shared';

import { ItineraryDashboardComponent } from './views/itinerary-dashboard/itinerary-dashboard.component';
import { BookingComponent } from './views/booking/booking.component';
import { BookingGeneralComponent } from './components/booking-general/booking-general.component';
import { BookingParticipantsComponent } from './components/booking-participants/booking-participants.component';

const routes: Routes = [
  {
    path: '',
    component: ItineraryDashboardComponent,
  },
  {
    path: ':bookingId',
    component: BookingComponent,
    children: [
      {
        path: '',
        component: BookingGeneralComponent,
        data: { key: 'general' },
      },
      {
        path: 'participants',
        component: BookingParticipantsComponent,
        data: { key: 'participants' },
      },
      { path: '**', redirectTo: '' },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    ItineraryDashboardComponent,
    BookingComponent,
    BookingGeneralComponent,
    BookingParticipantsComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItineraryModule {}
