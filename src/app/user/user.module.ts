import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './views/account/account.component';
import { SharedModule } from '@root/shared';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [AccountComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModule {}
