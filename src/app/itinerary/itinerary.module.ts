import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@root/shared';
import { IconsModule } from '@root/icons';

import { ItineraryDashboardComponent } from './views/itinerary-dashboard/itinerary-dashboard.component';
import { BookingComponent } from './views/booking/booking.component';
import { BookingGeneralComponent } from './components/booking-general/booking-general.component';
import { BookingParticipantsComponent } from './components/booking-participants/booking-participants.component';
import { BookingRemindersComponent } from './components/booking-reminders/booking-reminders.component';

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
      {
        path: 'reminders',
        component: BookingRemindersComponent,
        data: { key: 'reminders' },
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
    BookingRemindersComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes), IconsModule],
  exports: [RouterModule],
})
export class ItineraryModule {}
