import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRouterService, Project } from '@root/shared';

const projects: Record<string, Project> = {
  '1ABC': {
    id: '1ABC',
    name: 'Project 1',
    image: '',
  },
  '2DEF': {
    id: '2DEF',
    name: 'Project 2',
    image: '',
  },
  '3GHI': {
    id: '3GHI',
    name: 'Project 3',
    image: '',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private appRouter: AppRouterService) {}

  private projects$ = new BehaviorSubject<Record<string, Project>>(projects);

  getProjects(): Observable<Project[]> {
    return this.projects$
      .asObservable()
      .pipe(map((data) => Object.values(data)));
  }

  getActiveProject(): Observable<Project> {
    const activeProjectId = this.appRouter.getProjectId();
    return this.projects$
      .asObservable()
      .pipe(map((projects) => projects[activeProjectId]));
  }
}
