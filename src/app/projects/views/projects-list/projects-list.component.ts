import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { UserService } from '@root/authentication';
import { AppRouterService, Project } from '@root/shared';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private appRouter: AppRouterService,
    private projectService: ProjectsService
  ) {}

  projects$: Observable<Project[]> = of([]);

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
  }

  logout() {
    this.userService
      .logout()
      .pipe(
        map(() => {
          this.appRouter.goToLogin();
        })
      )
      .subscribe();
  }
}
