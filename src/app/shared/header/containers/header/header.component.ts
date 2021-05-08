import { Observable } from 'rxjs';
import { Email } from './../../../../pages/auth/models';
import { EmailService } from './../../../../pages/auth/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpened: boolean = true;

  emails$: Observable<Email[]>;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emails$ = this.emailService.loadEmails();
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

}
