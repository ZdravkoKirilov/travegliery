import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ProjectDataService, ProjectsService } from '@root/projects';
import { Participant, Project } from '@root/shared';

@Component({
  selector: 'app-booking-participants',
  templateUrl: './booking-participants.component.html',
  styleUrls: ['./booking-participants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingParticipantsComponent {
  participants$: Observable<Participant[]> = of([]);
  activeProject$: Observable<Project>;

  constructor(
    private dataService: ProjectDataService,
    private projectService: ProjectsService
  ) {
    this.participants$ = this.dataService
      .getActiveBooking()
      .pipe(
        switchMap((booking) =>
          this.dataService.getBookingParticipants(booking.id)
        )
      );

    this.activeProject$ = this.projectService.getActiveProject();
  }

  isFavorite(participantId: Participant['id']) {
    return this.dataService.favoriteParticipants$.pipe(
      map((favorites) => favorites.includes(participantId))
    );
  }
}
