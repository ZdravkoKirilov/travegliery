import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ParticipantsDashboardComponent } from './views/participants-dashboard/participants-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ParticipantsDashboardComponent,
  },
];

@NgModule({
  declarations: [ParticipantsDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantsModule {}
