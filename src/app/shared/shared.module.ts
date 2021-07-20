import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingListComponent } from './components/booking-list/booking-list.component';
import { AuthenticatedHeaderComponent } from './components/authenticated-header/authenticated-header.component';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [BookingListComponent, AuthenticatedHeaderComponent, LogoComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, InlineSVGModule],
  exports: [
    CommonModule,
    BookingListComponent,
    AuthenticatedHeaderComponent,
    InlineSVGModule,
  ],
})
export class SharedModule {}
