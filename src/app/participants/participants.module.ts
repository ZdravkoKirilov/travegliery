import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ParticipantsDashboardComponent } from './views/participants-dashboard/participants-dashboard.component';
import { ParticipantDetailsComponent } from './views/participant-details/participant-details.component';

const routes: Routes = [
  {
    path: '',
    component: ParticipantsDashboardComponent,
  },
  {
    path: ':participantId',
    component: ParticipantDetailsComponent,
    pathMatch: 'exact',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [ParticipantsDashboardComponent, ParticipantDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantsModule {}
