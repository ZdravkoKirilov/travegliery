import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectsService } from '@root/projects';
import { Project } from '@root/shared';

@Component({
  selector: 'app-share-itinerary',
  templateUrl: './share-itinerary.component.html',
  styleUrls: ['./share-itinerary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareItineraryComponent {
  activeProject$: Observable<Project>;

  constructor(private projectService: ProjectsService) {
    this.activeProject$ = this.projectService.getActiveProject();
  }
}
