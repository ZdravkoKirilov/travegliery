import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Participant } from '@root/shared';
import { ProjectDataService } from '@root/projects';

@Component({
  selector: 'app-participants-dashboard',
  templateUrl: './participants-dashboard.component.html',
  styleUrls: ['./participants-dashboard.component.scss'],
})
export class ParticipantsDashboardComponent implements OnInit {
  constructor(private dataService: ProjectDataService) {
    this.participants$ = this.dataService.getParticipants();
  }

  participants$: Observable<Participant[]> = of([]);

  ngOnInit(): void {}
}
