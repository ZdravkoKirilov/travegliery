import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LocalStorageService, User } from '@root/shared';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storage: LocalStorageService) {}

  getOrFetchUser(): Observable<User | null> {
    return this.storage.getToken() ? of({ name: 'Gosho' }) : of(null);
  }

  login() {
    return of(this.storage.saveToken('abc'));
  }

  logout() {
    localStorage.removeItem('sharedItems');
    localStorage.removeItem('emails');
    return of(this.storage.removeToken());
  }
}
