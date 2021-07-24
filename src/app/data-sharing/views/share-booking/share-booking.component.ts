import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '@root/shared';
import { ProjectsService } from '@root/projects';

@Component({
  selector: 'app-share-booking',
  templateUrl: './share-booking.component.html',
  styleUrls: ['./share-booking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareBookingComponent {
  activeProject$: Observable<Project>;

  constructor(private projectService: ProjectsService) {
    this.activeProject$ = this.projectService.getActiveProject();
  }
}
