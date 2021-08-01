import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProjectsService } from '@root/projects';
import { Email, Project, SharedItem, MatSnackBar } from '@root/shared';
import { SharingService } from '../../services/sharing.service';

@Component({
  selector: 'app-sharing-dashboard',
  templateUrl: './sharing-dashboard.component.html',
  styleUrls: ['./sharing-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharingDashboardComponent {
  activeProject$: Observable<Project>;

  items$: Observable<SharedItem[]>;
  emails$: Observable<Email[]>;

  constructor(
    private projectService: ProjectsService,
    private sharingService: SharingService,
    private snackbar: MatSnackBar
  ) {
    this.activeProject$ = this.projectService.getActiveProject();

    this.items$ = this.sharingService.items$;
    this.emails$ = this.sharingService.emails$;
  }

  getItemLink(item: SharedItem) {
    return this.sharingService.getItemLink(item);
  }

  getItemById(itemId: SharedItem['id']) {
    return this.items$.pipe(
      map((items) => {
        const item = items.find((elem) => elem.id === itemId);
        return item;
      })
    );
  }

  deleteItem(itemId: SharedItem['id']) {
    this.sharingService.deleteSharedItem(itemId);
    this.snackbar.open('Link deleted', '', { duration: 3000 });
  }

  deleteEmail(emailId: Email['id']) {
    this.sharingService.deleteEmail(emailId);
    this.snackbar.open('Email deleted', '', { duration: 3000 });
  }
}
