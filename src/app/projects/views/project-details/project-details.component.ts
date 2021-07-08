import { Component, OnInit } from '@angular/core';
import { Project } from '@root/shared';
import { Observable } from 'rxjs';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  project$: Observable<Project>;

  constructor(private projectService: ProjectsService) {
    this.project$ = projectService.getActiveProject();
  }

  ngOnInit(): void {}
}
