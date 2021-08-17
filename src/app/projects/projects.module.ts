import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@root/shared';
import { WithAuthGuard } from '@root/authentication';
import { IconsModule } from '@root/icons';

import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './views/project-details/project-details.component';
import { ProjectContextComponent } from './views/project-context/project-context.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectContextComponent,
    children: [
      {
        path: '',
        component: ProjectsListComponent,
        canActivate: [WithAuthGuard],
      },
      {
        path: ':projectId',
        pathMatch: 'exact',
        component: ProjectDetailsComponent,
        canActivate: [WithAuthGuard],
      },
      {
        path: ':projectId/itinerary',
        loadChildren: () =>
          import('../itinerary').then((m) => m.ItineraryModule),
        canActivate: [WithAuthGuard],
      },
      {
        path: ':projectId/participants',
        loadChildren: () =>
          import('../participants').then((m) => m.ParticipantsModule),
        canActivate: [WithAuthGuard],
      },
      {
        path: ':projectId/sharing',
        loadChildren: () =>
          import('../data-sharing').then((m) => m.DataSharingModule),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectDetailsComponent,
    ProjectContextComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes), IconsModule],
  exports: [RouterModule],
})
export class ProjectsModule {}
