import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { class: 'full-container' },
})
export class AppComponent {
  title = 'goatzilla';
}
