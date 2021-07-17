import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppRouterService, Participant, Project } from '@root/shared';
import { ProjectDataService, ProjectsService } from '@root/projects';

@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.scss'],
})
export class ParticipantDetailsComponent implements OnInit {
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

  ngOnInit(): void {}
}
