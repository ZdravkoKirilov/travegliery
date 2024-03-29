import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { SharedModule } from '@root/shared';
import { WithAuthGuard } from '@root/authentication';
import { IconsModule } from '@root/icons';

import { ShareItineraryComponent } from './views/share-itinerary/share-itinerary.component';
import { ItineraryComponent } from './views/itinerary/itinerary.component';
import { SharingDashboardComponent } from './views/sharing-dashboard/sharing-dashboard.component';
import { ShareBookingComponent } from './views/share-booking/share-booking.component';
import { SharePriceReportComponent } from './views/share-price-report/price-report.component';
import { ShareSettingsComponent } from './components/share-settings/share-settings.component';
import { PriceReportVisualizationComponent } from './components/price-report-visualization/price-report-visualization.component';
import { SharingService } from './services/sharing.service';
import { PriceReportComponent } from './views/price-report/price-report.component';
import { SharingTypePipe } from './pipes/sharing-type.pipe';
import { EmailStatusPipe } from './pipes/email-status.pipe';
import { BookingComponent } from './views/booking/booking.component';
import { BookingVisualizationComponent } from './components/booking-visualization/booking-visualization.component';

const routes: Routes = [
  {
    path: '',
    component: SharingDashboardComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: 'itinerary/send/:participantId',
    component: ShareItineraryComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: 'itinerary/view/:shareId',
    component: ItineraryComponent,
  },
  {
    path: 'booking/send/:bookingId',
    component: ShareBookingComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: 'booking/view/:shareId',
    component: BookingComponent,
  },
  {
    path: 'pricing/send',
    component: SharePriceReportComponent,
    canActivate: [WithAuthGuard],
  },
  {
    path: 'pricing/view/:shareId',
    component: PriceReportComponent,
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
    SharePriceReportComponent,
    ShareSettingsComponent,
    PriceReportVisualizationComponent,
    PriceReportComponent,
    SharingTypePipe,
    EmailStatusPipe,
    BookingComponent,
    BookingVisualizationComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    IconsModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [SharingService, DatePipe],
})
export class DataSharingModule {}
