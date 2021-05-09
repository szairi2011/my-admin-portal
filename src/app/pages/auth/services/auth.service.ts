import { Credentials } from './../models/credentials';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(creds: Credentials): Observable<User> {
    // TODO: replace with real service invocation
    return of(
      {
        firstname: "sofien",
        lastname: "lastname",
        email: 'sofien.zairi@fisglobal.com'
      }
    )
  }

  signup(user: User) {
    // TODO: replace with user creation request
    return of( user );
  }

  getLoggedInUser(): Observable<User> {
    const user: User = JSON.parse(localStorage.getItem('user'));
    return of(
      user
    );
  }

  signout() {
    localStorage.removeItem('userID');
    localStorage.removeItem('user');
  }
}
