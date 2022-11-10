import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: string | undefined;

  constructor() { }

  logout() {
    this.user = undefined;
  }

  login(username: string, _password: string) {
    this.user = username;
  }
}
