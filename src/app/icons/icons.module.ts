import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent, SvgIconsModule } from '@ngneat/svg-icon';

import { appStarIcon } from '@assets/generated-icons/star';
import { appShareIcon } from '@assets/generated-icons/share';
import { appBackIcon } from '@assets/generated-icons/back';
import { appCalendarIcon } from '@assets/generated-icons/calendar';
import { appItineraryIcon } from '@assets/generated-icons/itinerary';
import { appPeopleIcon } from '@assets/generated-icons/people';
import { appHeartbeatIcon } from '@assets/generated-icons/heartbeat';
import { appShareCenterIcon } from '@assets/generated-icons/share-center';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      sizes: {
        xs: '10px',
        sm: '16px',
        md: '22px',
        lg: '28px',
        xl: '40px',
        xxl: '60px',
      },
      defaultSize: 'md',
      icons: [
        appStarIcon,
        appShareIcon,
        appBackIcon,
        appCalendarIcon,
        appItineraryIcon,
        appPeopleIcon,
        appHeartbeatIcon,
        appShareCenterIcon,
      ],
    }),
  ],
  exports: [SvgIconsModule, SvgIconComponent],
})
export class IconsModule {}
