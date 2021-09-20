import { IAddPartComponent } from './../../add-user-form-part-loader/add-user-form-part-loader.component';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-add-user-account',
  templateUrl: './add-user-account.component.html',
  styleUrls: ['./add-user-account.component.scss']
})
export class AddUserAccountComponent implements OnInit, IAddPartComponent {

  @Input('stepper') stepper: MatHorizontalStepper;

  addAccountForm: FormGroup;

  title = 'Create New Account';

  @ViewChild('add_account') add_account: TemplateRef<any>;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addAccountForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

}
