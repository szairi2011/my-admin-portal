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
        lastname: "lastname"
      }
    )
  }

  signup(user: User) {
    // TODO: replace with user creation request
    return of( user );

  }
}
