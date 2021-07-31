import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@root/shared';

import { ParticipantsDashboardComponent } from './views/participants-dashboard/participants-dashboard.component';
import { ParticipantDetailsComponent } from './views/participant-details/participant-details.component';
import { ParticipantContactComponent } from './components/participant-contact/participant-contact.component';
import { ParticipantItineraryComponent } from './components/participant-itinerary/participant-itinerary.component';
import { IconsModule } from '@root/icons';

const routes: Routes = [
  {
    path: '',
    component: ParticipantsDashboardComponent,
  },
  {
    path: ':participantId',
    component: ParticipantDetailsComponent,
    children: [
      {
        path: '',
        component: ParticipantContactComponent,
        data: { key: 'general' },
      },
      {
        path: 'itinerary',
        component: ParticipantItineraryComponent,
        data: { key: 'itinerary' },
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
    ParticipantsDashboardComponent,
    ParticipantDetailsComponent,
    ParticipantContactComponent,
    ParticipantItineraryComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes), IconsModule],
  exports: [RouterModule],
})
export class ParticipantsModule {}
