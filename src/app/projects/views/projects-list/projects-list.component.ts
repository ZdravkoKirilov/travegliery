import { Component, OnInit } from '@angular/core';

import { UserService } from '@root/authentication';
import { AppRouterService } from '@root/shared';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private appRouter: AppRouterService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.userService
      .logout()
      .pipe(
        map(() => {
          this.appRouter.goToLogin();
        })
      )
      .subscribe();
  }
}
