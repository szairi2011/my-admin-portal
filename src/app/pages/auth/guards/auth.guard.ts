import { routes } from './../../../consts/routes';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  routes = routes;

  constructor( private router: Router ) {

  }

  // Redirect non authenticated user to the login page
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const loggedInUserID = localStorage.getItem('userID');

    if (loggedInUserID) {
      return true;
    }
    else {
      return this.router.navigate([routes.LOGIN_PAGE]);
    }
  }

}
