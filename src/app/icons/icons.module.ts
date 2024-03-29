import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent, SvgIconsModule } from '@ngneat/svg-icon';

import { appStarIcon } from '@assets/generated-icons/star';
import { appShareIcon } from '@assets/generated-icons/share';
import { appBackIcon } from '@assets/generated-icons/back';
import { appItineraryIcon } from '@assets/generated-icons/itinerary';
import { appPeopleIcon } from '@assets/generated-icons/people';
import { appShareCenterIcon } from '@assets/generated-icons/share-center';
import { appDotsIcon } from '@assets/generated-icons/dots';
import { appNotesIcon } from '@assets/generated-icons/notes';
import { appPlaneIcon } from '@assets/generated-icons/plane';
import { appTrainIcon } from '@assets/generated-icons/train';
import { appHotelIcon } from '@assets/generated-icons/hotel';
import { appFerryIcon } from '@assets/generated-icons/ferry';
import { appCopyIcon } from '@assets/generated-icons/copy';
import { appFilterIcon } from '@assets/generated-icons/filter';
import { appRemoveIcon } from '@assets/generated-icons/remove';
import { appBudgetIcon } from '@assets/generated-icons/budget';
import { appLinkIcon } from '@assets/generated-icons/link';
import { appEmailIcon } from '@assets/generated-icons/email';

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
        appItineraryIcon,
        appPeopleIcon,
        appShareCenterIcon,
        appDotsIcon,
        appNotesIcon,
        appPlaneIcon,
        appTrainIcon,
        appHotelIcon,
        appFerryIcon,
        appCopyIcon,
        appFilterIcon,
        appRemoveIcon,
        appBudgetIcon,
        appLinkIcon,
        appEmailIcon,
      ],
    }),
  ],
  exports: [SvgIconsModule, SvgIconComponent],
})
export class IconsModule {}
