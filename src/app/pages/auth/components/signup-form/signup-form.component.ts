import { User } from './../../models';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  @Output('sendSignupForm') sigupEvent = new EventEmitter<User>();
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      username: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  signup(user: User) {
    this.sigupEvent.emit(user);
  }

}
