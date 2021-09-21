import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { IAddFormPartComponent } from '../../../models';
import { user_roles } from 'src/app/pages/user/common';

@Component({
  selector: 'app-add-user-account',
  templateUrl: './add-user-account.component.html',
  styleUrls: ['./add-user-account.component.scss']
})
export class AddUserAccountComponent implements OnInit, IAddFormPartComponent {

  @Input('stepper') stepper: MatHorizontalStepper;

  addAccountForm: FormGroup;

  title = 'Create New Account';

  userRoles = user_roles;

  @ViewChild('add_account') add_account: TemplateRef<any>;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addAccountForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
      role: [this.userRoles[0].value]
    });
  }

}
