import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { UserService } from '@root/authentication';
import { AppRouterService } from '@root/shared';

@Component({
  selector: 'app-authenticated-header',
  templateUrl: './authenticated-header.component.html',
  styleUrls: ['./authenticated-header.component.scss'],
})
export class AuthenticatedHeaderComponent {
  constructor(
    private userService: UserService,
    private appRouter: AppRouterService
  ) {}

  logout() {
    this.userService
      .logout()
      .pipe(
        tap(() => {
          this.appRouter.goToLogin();
        })
      )
      .subscribe();
  }
}
