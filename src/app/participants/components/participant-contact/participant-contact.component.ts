import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectDataService } from '@root/projects';
import { Participant } from '@root/shared';
@Component({
  selector: 'app-participant-contact',
  templateUrl: './participant-contact.component.html',
  styleUrls: ['./participant-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantContactComponent {
  participant$: Observable<Participant>;

  constructor(private dataService: ProjectDataService) {
    this.participant$ = dataService.getActiveParticipant();
  }
}
