import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { OnChange, MatSnackBar } from '@root/shared';

@Component({
  selector: 'app-share-settings',
  templateUrl: './share-settings.component.html',
  styleUrls: ['./share-settings.component.scss'],
})
export class ShareSettingsComponent implements OnInit {
  constructor(private snackbar: MatSnackBar) {}

  @Output() makeLink = new EventEmitter();
  @Output() shareLink: EventEmitter<string[]> = new EventEmitter();

  @Input() link: string = '';
  @Input() emails: string[] = [];

  emailFilter$ = new BehaviorSubject('');

  @OnChange<boolean, ShareSettingsComponent>((value, self) => {
    if (value === false) {
      self.emailFilter = '';
      self.displayedRecipients = [];
    }
  })
  showEmailSharing = false;

  _recipients$ = new BehaviorSubject<string[]>([]);

  recipients$ = combineLatest([this._recipients$, this.emailFilter$]).pipe(
    map(([recipients, activeFilter]) => {
      return activeFilter
        ? recipients.filter(
            (elem) =>
              elem &&
              elem.toLowerCase().includes(activeFilter.toLowerCase()) &&
              !this.displayedRecipients.includes(elem)
          )
        : [];
    })
  );

  displayedRecipients: string[] = [];

  @OnChange<string, ShareSettingsComponent>((value, self) => {
    self.emailFilter$.next(value);
  })
  emailFilter = '';

  handleShare(recipientEmails: string[]) {
    this.shareLink.emit(recipientEmails);
    this.showEmailSharing = false;
  }

  handleEnter(email: string) {
    if (email) {
      this.displayedRecipients = Array.from(
        new Set([...this.displayedRecipients, email])
      );
      this.emailFilter = '';
    }
  }

  removeRecipient(event: Event, email: string) {
    event.stopPropagation();
    this.displayedRecipients = this.displayedRecipients.filter(
      (elem) => elem !== email
    );
  }

  addRecipient(email: string) {
    if (email) {
      this.displayedRecipients.push(email);
      this.emailFilter = '';
    }
  }

  toggleEmailSharing() {
    this.showEmailSharing = !this.showEmailSharing;
  }

  onCopy() {
    this.snackbar.open('Share link was copied!', '', {
      duration: 3000,
    });
  }

  ngOnInit() {
    this._recipients$.next(this.emails);
  }
}
