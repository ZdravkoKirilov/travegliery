import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  BookingGroups,
  ProjectDataService,
  ProjectsService,
} from '@root/projects';
import { Project } from '@root/shared';
@Component({
  selector: 'app-participant-itinerary',
  templateUrl: './participant-itinerary.component.html',
  styleUrls: ['./participant-itinerary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantItineraryComponent {
  bookingGroups$: Observable<BookingGroups> = of([]);
  activeProject$: Observable<Project>;

  constructor(
    private dataService: ProjectDataService,
    private projectService: ProjectsService
  ) {
    this.bookingGroups$ = this.dataService.getBookingGroupsForParticipant();
    this.activeProject$ = this.projectService.getActiveProject();
  }
}
