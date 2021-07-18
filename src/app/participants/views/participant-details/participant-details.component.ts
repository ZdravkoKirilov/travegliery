import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { AppRouterService, Participant, Project } from '@root/shared';
import { ProjectDataService, ProjectsService } from '@root/projects';

@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.scss'],
})
export class ParticipantDetailsComponent {
  participant$: Observable<Participant>;
  activeProject$: Observable<Project>;

  constructor(
    private dataService: ProjectDataService,
    private projectService: ProjectsService,
    public appRouter: AppRouterService
  ) {
    this.participant$ = this.dataService.getActiveParticipant();
    this.activeProject$ = this.projectService.getActiveProject();
  }

  isFavorite(participantId: Participant['id']) {
    return this.dataService.favoriteParticipants$.pipe(
      map((favorites) => favorites.includes(participantId))
    );
  }

  toggleFavorite(participantId: Participant['id']) {
    this.dataService.favoriteParticipants$
      .pipe(
        take(1),
        switchMap((favorites) => {
          if (favorites.includes(participantId)) {
            return this.dataService.removeFromFavorites(participantId);
          }
          return this.dataService.addToFavorites(participantId);
        })
      )
      .subscribe();
  }
}
