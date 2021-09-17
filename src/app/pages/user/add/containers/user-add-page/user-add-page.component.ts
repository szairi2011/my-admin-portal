import { AddUserFormStepperComponent } from './../../components/add-user-form-stepper/add-user-form-stepper.component';
import { FormGroup } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-user-add-page',
  templateUrl: './user-add-page.component.html',
  styleUrls: ['./user-add-page.component.scss']
})
export class UserAddPageComponent implements OnInit, AfterViewInit {

  constructor() { }

  stepper: MatHorizontalStepper;
  @ViewChild(AddUserFormStepperComponent) stepperComponent : AddUserFormStepperComponent;

  @ViewChild('addAccountForm') accountForm : FormGroup;
  @ViewChild('addUserDetailsForm') userDetailsForm : FormGroup;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.stepper = this.stepperComponent.stepper;
      console.log("UserAddPageComponent :: stepperComponent value: ", this.stepperComponent);
      console.log("UserAddPageComponent :: Stepper value: ", this.stepper);
    });

  }

}
