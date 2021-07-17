import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectDataService, ProjectsService } from '@root/projects';
import { Participant, Project } from '@root/shared';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
}
