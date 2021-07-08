import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type RouteData = {
  key: string;
};

@Injectable({
  providedIn: 'root',
})
export class AppRouterService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToHome() {
    return this.router.navigate(['/projects']);
  }

  goToLogin() {
    return this.router.navigate(['/auth']);
  }

  getProjectId() {
    const data = this.getRouteData();
    const projectId: string = data.params['projectId'];
    return projectId;
  }

  getRouteData() {
    let route = this.activatedRoute.snapshot.root;
    let params = { ...route.params };
    let data = route.data as RouteData;

    while (route.firstChild) {
      route = route.firstChild;
      params = { ...params, ...route.params };
      data = { ...data, ...route.data };
    }
    data = { ...data, ...route.data };

    const {
      url,
      root: { queryParams },
    } = this.activatedRoute.snapshot;

    return { url, params, queryParams, data };
  }

  isRouteActive(key: RouteData['key']) {
    const state = this.getRouteData();
    return state.data?.key === key;
  }
}
