import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPast } from 'date-fns';

import { Project } from '@root/shared';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  constructor(private projectService: ProjectsService) {}

  activeProjects$: Observable<Project[]> = of([]);
  pastProjects$: Observable<Project[]> = of([]);

  ngOnInit(): void {
    this.activeProjects$ = this.projectService
      .getProjects()
      .pipe(
        map((projects) =>
          projects.filter((project) => !isPast(new Date(project.end)))
        )
      );

    this.pastProjects$ = this.projectService
      .getProjects()
      .pipe(
        map((projects) =>
          projects.filter((project) => isPast(new Date(project.end)))
        )
      );
  }
}
