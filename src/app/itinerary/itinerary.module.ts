import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItineraryDashboardComponent } from './views/itinerary-dashboard/itinerary-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ItineraryDashboardComponent,
  },
];

@NgModule({
  declarations: [ItineraryDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItineraryModule {}
