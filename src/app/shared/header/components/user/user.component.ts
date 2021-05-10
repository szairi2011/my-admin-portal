import { Router } from '@angular/router';
import { User } from './../../../../pages/auth/models/user';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { routes } from 'src/app/consts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  @Output() signOut: EventEmitter<void> = new EventEmitter();

  routes = routes;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signOutUser() {
    this.signOut.emit();
  }

  // No longer required; using routerLink instead
  /* navigate(url: string) {
    console.log(url);
    this.router.navigate([url]);
  } */

}
