import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Participant } from '@root/shared';
import { ProjectDataService } from '@root/projects';

@Component({
  selector: 'app-participants-dashboard',
  templateUrl: './participants-dashboard.component.html',
  styleUrls: ['./participants-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantsDashboardComponent {
  constructor(private dataService: ProjectDataService) {
    this.participants$ = this.dataService.getParticipants();
  }

  participants$: Observable<Participant[]> = of([]);

  isFavorite(participantId: Participant['id']) {
    return this.dataService.favoriteParticipants$.pipe(
      map((favorites) => favorites.includes(participantId))
    );
  }
}
