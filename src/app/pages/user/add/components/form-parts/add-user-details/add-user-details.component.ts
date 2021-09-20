import { IAddPartComponent } from './../../add-user-form-part-loader/add-user-form-part-loader.component';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-add-user-details',
  templateUrl: './add-user-details.component.html',
  styleUrls: ['./add-user-details.component.scss']
})
export class AddUserDetailsComponent implements OnInit, IAddPartComponent {

  @Input('stepper') stepper: MatHorizontalStepper;

  addUserDetailsForm: FormGroup;

  title = 'Create User Details';

  @ViewChild('add_user_details') user_details : TemplateRef<any>;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addUserDetailsForm = this.fb.group({
      firstname: ['', Validators.required]
    });
  }

}
