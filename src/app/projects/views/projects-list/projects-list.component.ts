import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from '@root/shared';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  constructor(private projectService: ProjectsService) {}

  projects$: Observable<Project[]> = of([]);

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
  }
}
