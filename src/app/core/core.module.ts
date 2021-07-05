import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from '../authentication/authentication.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationModule],
  exports: [AuthenticationModule],
})
export class CoreModule {}
