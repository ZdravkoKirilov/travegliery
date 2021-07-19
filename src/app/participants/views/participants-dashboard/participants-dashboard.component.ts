import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Participant, Project } from '@root/shared';
import { ProjectDataService, ProjectsService } from '@root/projects';

@Component({
  selector: 'app-participants-dashboard',
  templateUrl: './participants-dashboard.component.html',
  styleUrls: ['./participants-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantsDashboardComponent {
  constructor(
    private dataService: ProjectDataService,
    private projectService: ProjectsService
  ) {
    this.participants$ = this.dataService.getParticipants();
    this.activeProject$ = this.projectService.getActiveProject();
  }

  participants$: Observable<Participant[]> = of([]);
  activeProject$: Observable<Project>;

  isFavorite(participantId: Participant['id']) {
    return this.dataService.favoriteParticipants$.pipe(
      map((favorites) => favorites.includes(participantId))
    );
  }
}
