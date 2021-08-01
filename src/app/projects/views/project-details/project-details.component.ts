import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { addDays, subDays, formatISO } from 'date-fns';

import { Project } from '@root/shared';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  project$: Observable<Project>;

  constructor(private projectService: ProjectsService) {
    this.project$ = this.projectService.getActiveProject();
  }

  getToday() {
    return {
      fromDate: formatISO(new Date(), { representation: 'date' }),
      toDate: formatISO(new Date(), { representation: 'date' }),
    };
  }

  getPastSeven() {
    return {
      fromDate: formatISO(subDays(new Date(), 7), { representation: 'date' }),
      toDate: formatISO(new Date(), { representation: 'date' }),
    };
  }

  getNextSeven() {
    return {
      fromDate: formatISO(new Date(), { representation: 'date' }),
      toDate: formatISO(addDays(new Date(), 7), { representation: 'date' }),
    };
  }
}
