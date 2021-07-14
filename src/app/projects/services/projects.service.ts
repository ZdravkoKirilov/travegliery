import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRouterService, Project } from '@root/shared';

const projects: Record<string, Project> = {
  '1': {
    id: '1',
    name: 'Project 1',
    image: '',
  },
  '2': {
    id: '2',
    name: 'Project 2',
    image: '',
  },
  '3': {
    id: '3',
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
