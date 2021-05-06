import { Credentials } from './../../models/credentials';
import { User } from './../../models';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/consts';
import { AuthService } from '../../services';
import { YearPipe } from '../../pipes';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  loggedInUser: User;
  routes = routes;
  today = new Date();
  // year: YearPipe = new YearPipe();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  authenticateUser(creds: Credentials) {
    this.authService.login(creds)
      .subscribe(
        u => {
          this.loggedInUser = u;
          this.login();
        },
        err => console.log(err)
      )
  }

  // Login the autenticated user
  login() {

    if (this.loggedInUser) {

      localStorage.setItem('userID', this.loggedInUser.firstname); // session token for logged in user
      localStorage.setItem('user', JSON.stringify(this.loggedInUser)); // For user profile screen
      this.router.navigate([routes.DASHBOARD_PAGE]).then();
    }

  }

}
