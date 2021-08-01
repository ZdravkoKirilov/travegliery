import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '@root/shared';
import { WithAuthGuard } from '@root/authentication';
import { IconsModule } from '@root/icons';

import { ShareItineraryComponent } from './views/share-itinerary/share-itinerary.component';
import { ItineraryComponent } from './views/itinerary/itinerary.component';
import { SharingDashboardComponent } from './views/sharing-dashboard/sharing-dashboard.component';
import { ShareBookingComponent } from './views/share-booking/share-booking.component';
import { PriceReportComponent } from './views/price-report/price-report.component';
import { ShareSettingsComponent } from './components/share-settings/share-settings.component';
import { PriceReportVisualizationComponent } from './components/price-report-visualization/price-report-visualization.component';

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
    path: 'pricing/send',
    component: PriceReportComponent,
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
    PriceReportComponent,
    ShareSettingsComponent,
    PriceReportVisualizationComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    IconsModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class DataSharingModule {}
