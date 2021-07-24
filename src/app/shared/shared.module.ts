import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';

import { BookingListComponent } from './components/booking-list/booking-list.component';
import { AuthenticatedHeaderComponent } from './components/authenticated-header/authenticated-header.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';

@NgModule({
  declarations: [
    BookingListComponent,
    AuthenticatedHeaderComponent,
    LogoComponent,
    PublicHeaderComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, InlineSVGModule],
  exports: [
    CommonModule,
    BookingListComponent,
    AuthenticatedHeaderComponent,
    PublicHeaderComponent,
    InlineSVGModule,
  ],
})
export class SharedModule {}
