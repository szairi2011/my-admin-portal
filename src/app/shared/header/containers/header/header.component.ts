import { routes } from './../../../../consts/routes';
import { Observable } from 'rxjs';
import { Email, User } from './../../../../pages/auth/models';
import { EmailService, AuthService } from './../../../../pages/auth/services';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpened: boolean = true;

  emails$: Observable<Email[]>;

  user$: Observable<User>;

  routes = routes;

  constructor(
    private emailService: EmailService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.emails$ = this.emailService.loadEmails();
    this.user$ = this.authService.getLoggedInUser()
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  signout() {
    this.authService.signout();
    this.router.navigate([this.routes.LOGIN_PAGE]);
  }

}
