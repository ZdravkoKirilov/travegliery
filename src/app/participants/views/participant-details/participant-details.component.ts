import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Participant } from '@root/shared';
import { ProjectDataService } from '@root/projects';

@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.scss'],
})
export class ParticipantDetailsComponent implements OnInit {
  participant$: Observable<Participant>;

  constructor(private dataService: ProjectDataService) {
    this.participant$ = this.dataService.getActiveParticipant();
  }

  ngOnInit(): void {}
}
