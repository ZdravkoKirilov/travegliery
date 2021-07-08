import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { ProjectDetailsComponent } from './views/project-details/project-details.component';

const routes: Routes = [
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
    loadChildren: () => import('../itinerary').then((m) => m.ItineraryModule),
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
];

@NgModule({
  declarations: [ProjectsListComponent, ProjectDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsModule {}
