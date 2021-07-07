import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { AppRouterService } from '@root/shared';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private appRouter: AppRouterService
  ) {}

  login(event: Event) {
    event.preventDefault();
    this.userService
      .login()
      .pipe(
        map(() => {
          this.appRouter.goToHome();
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}
}
