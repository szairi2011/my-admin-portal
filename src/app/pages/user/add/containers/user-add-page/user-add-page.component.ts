import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add-page',
  templateUrl: './user-add-page.component.html',
  styleUrls: ['./user-add-page.component.scss']
})
export class UserAddPageComponent implements OnInit {

  lessons: string[];
  totaleEstimates = 10;
  ctx = {estimate: this.totaleEstimates};

  constructor() { }

  ngOnInit(): void {

    this.lessons = ['lesson-1', 'lesson-2'];
  }


  /* Fake methods for convenience ... */

  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }

}
