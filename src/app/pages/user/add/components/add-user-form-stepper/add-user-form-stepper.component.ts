import { MatHorizontalStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user-form-stepper',
  templateUrl: './add-user-form-stepper.component.html',
  styleUrls: ['./add-user-form-stepper.component.scss']
})
export class AddUserFormStepperComponent implements OnInit {

  @Input('stepForms') stepForms: FormGroup[];

  @ViewChild('stepper') stepper : MatHorizontalStepper;

  constructor() { }

  ngOnInit(): void {

  }

}
