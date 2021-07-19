import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@root/shared';
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
      },
      {
        path: ':projectId',
        pathMatch: 'exact',
        component: ProjectDetailsComponent,
      },
      {
        path: ':projectId/itinerary',
        loadChildren: () =>
          import('../itinerary').then((m) => m.ItineraryModule),
      },
      {
        path: ':projectId/participants',
        loadChildren: () =>
          import('../participants').then((m) => m.ParticipantsModule),
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
