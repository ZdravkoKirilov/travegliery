import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectsService } from '@root/projects';
import { Email, Project, SharedItem } from '@root/shared';
import { SharingService } from '@root/data-sharing/services/sharing.service';

@Component({
  selector: 'app-sharing-dashboard',
  templateUrl: './sharing-dashboard.component.html',
  styleUrls: ['./sharing-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharingDashboardComponent {
  activeProject$: Observable<Project>;

  items$: Observable<SharedItem[]>;
  emails$: Observable<Email[]>;

  constructor(
    private projectService: ProjectsService,
    private sharingService: SharingService
  ) {
    this.activeProject$ = this.projectService.getActiveProject();

    this.items$ = this.sharingService.items$;
    this.emails$ = this.sharingService.emails$;
  }

  getItemLink(item: SharedItem) {
    return this.sharingService.getItemLink(item);
  }
}
