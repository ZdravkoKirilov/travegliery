import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WithAuthGuard, WithoutAuthGuard } from './authentication';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication').then((m) => m.AuthenticationModule),
    canActivate: [WithoutAuthGuard],
  },
  {
    path: 'sharing',
    loadChildren: () =>
      import('./data-sharing').then((m) => m.DataSharingModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects').then((m) => m.ProjectsModule),
    canActivate: [WithAuthGuard],
  },
  {
    path: '**',
    redirectTo: '/projects',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
