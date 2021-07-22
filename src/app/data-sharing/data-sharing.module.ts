import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WithAuthGuard } from '@root/authentication';

import { ShareItineraryComponent } from './views/share-itinerary/share-itinerary.component';
import { ItineraryComponent } from './views/itinerary/itinerary.component';
import { SharingDashboardComponent } from './views/sharing-dashboard/sharing-dashboard.component';
import { ShareBookingComponent } from './views/share-booking/share-booking.component';

const routes: Routes = [
  {
    path: '',
    component: SharingDashboardComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: 'itinerary/send',
    component: ShareItineraryComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: 'itinerary/view/:token',
    component: ItineraryComponent,
  },
  {
    path: 'booking/send',
    component: ShareBookingComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    ShareItineraryComponent,
    ItineraryComponent,
    SharingDashboardComponent,
    ShareBookingComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataSharingModule {}
