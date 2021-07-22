import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addDays, subDays } from 'date-fns';

import { AppRouterService, Project } from '@root/shared';

const today = new Date();

const projects: Record<string, Project> = {
  '1': {
    id: '1',
    name: 'Project 1',
    image: '',
    start: subDays(today, 55).toUTCString(),
    end: addDays(today, 25).toUTCString(),
  },
  '2': {
    id: '2',
    name: 'Project 2',
    image: '',
    start: subDays(today, 55).toUTCString(),
    end: subDays(today, 5).toUTCString(),
  },
  '3': {
    id: '3',
    name: 'Project 3',
    image: '',
    start: subDays(today, 55).toUTCString(),
    end: addDays(today, 5).toUTCString(),
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
