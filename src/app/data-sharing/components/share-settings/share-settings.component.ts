import { Component, Output, EventEmitter, Input } from '@angular/core';

import { MatSnackBar } from '@root/shared';

type SavePayload = { sendEmail: boolean };

@Component({
  selector: 'app-share-settings',
  templateUrl: './share-settings.component.html',
  styleUrls: ['./share-settings.component.scss'],
})
export class ShareSettingsComponent {
  constructor(private snackbar: MatSnackBar) {}

  @Output() save = new EventEmitter<SavePayload>();
  @Input() code: string = '';

  onCopy() {
    this.snackbar.open('Share link copied to clipboard!', '', {
      duration: 3000,
    });
  }
}
