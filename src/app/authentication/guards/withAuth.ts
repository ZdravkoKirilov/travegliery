import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';

import { AppRouterService } from '@root/shared';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class WithAuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: AppRouterService
  ) {}

  canActivate() {
    return this.userService.getOrFetchUser().pipe(
      map((mbUser) => {
        if (!mbUser) {
          this.router.goToLogin();
          return false;
        }
        return true;
      })
    );
  }
}
