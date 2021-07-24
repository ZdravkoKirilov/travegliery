import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectsService } from '@root/projects';
import { Project } from '@root/shared';

@Component({
  selector: 'app-sharing-dashboard',
  templateUrl: './sharing-dashboard.component.html',
  styleUrls: ['./sharing-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharingDashboardComponent {
  activeProject$: Observable<Project>;

  constructor(private projectService: ProjectsService) {
    this.activeProject$ = this.projectService.getActiveProject();
  }
}
