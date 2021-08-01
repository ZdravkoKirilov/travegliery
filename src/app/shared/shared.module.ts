import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IconsModule } from '@root/icons';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { AuthenticatedHeaderComponent } from './components/authenticated-header/authenticated-header.component';
import { LogoComponent } from './components/logo/logo.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { BookingTypePipe } from './pipes/booking-type.pipe';
import { MaterialModule } from './material.module';
import { BookingFiltersComponent } from './components/booking-filters/booking-filters.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    BookingListComponent,
    AuthenticatedHeaderComponent,
    LogoComponent,
    PublicHeaderComponent,
    BookingTypePipe,
    BookingFiltersComponent,
    ClickOutsideDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    InlineSVGModule,
    IconsModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    BookingListComponent,
    AuthenticatedHeaderComponent,
    PublicHeaderComponent,
    InlineSVGModule,
    MaterialModule,
    BookingTypePipe,
    BookingFiltersComponent,
    ClickOutsideDirective,
  ],
})
export class SharedModule {}
