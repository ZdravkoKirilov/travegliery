import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent, SvgIconsModule } from '@ngneat/svg-icon';

import { appStarIcon } from '@assets/generated-icons/star';
import { appShareIcon } from '@assets/generated-icons/share';
import { appBackIcon } from '@assets/generated-icons/back';

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
      icons: [appStarIcon, appShareIcon, appBackIcon],
    }),
  ],
  exports: [SvgIconsModule, SvgIconComponent],
})
export class IconsModule {}
