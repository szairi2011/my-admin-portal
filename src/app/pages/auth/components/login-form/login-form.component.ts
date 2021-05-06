import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  // fb: FormBuilder;
  loginForm: FormGroup;
  @Output('sendLoginForm') loginEmitter = new EventEmitter<Credentials>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        username: [null, Validators.required],
        password: [null, Validators.required]
      }
    )
  }

  authenticate(creds: Credentials) {
    this.loginEmitter.emit(creds);
  }

}
