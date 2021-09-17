import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { MatHorizontalStepper, MatStep,  } from '@angular/material/stepper';
import { CdkStepLabel } from '@angular/cdk/stepper';

@Component({
  selector: 'app-add-user-form-stepper',
  templateUrl: './add-user-form-stepper.component.html',
  styleUrls: ['./add-user-form-stepper.component.scss']
})
export class AddUserFormStepperComponent implements OnInit, AfterViewInit {

  addAccountForm: FormGroup;

  addUserDetailsForm: FormGroup;

  stepForms: FormGroup[];

  // steps: ["label1", "label2"];
  // steps: ["<ng-template matStepLabel>label1</ng-template>", "<ng-template matStepLabel>label2</ng-template>"];;
  // stepLabels: CdkStepLabel[];
  // stepLabels: TemplateRef<any>[];
  // stepLabels: object[];
  // stepLabels: MatStep[];
  stepLabels: Observable<TemplateRef<any>>[];
  stepTemplateRefs: Observable<TemplateRef<any>>[];

  @ViewChild('part_1') part_1 : Observable<TemplateRef<any>>;
  @ViewChild('part_2') part_2 : Observable<TemplateRef<any>>;

  @ViewChild('label_1') label_1 : Observable<TemplateRef<any>>;
  @ViewChild('label_2') label_2 : Observable<TemplateRef<any>>;

  @ViewChild('stepper') stepper : MatHorizontalStepper;

  constructor(
    private fb: FormBuilder
  ) { }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.stepTemplateRefs = [this.part_1, this.part_2];
      // this.stepLabels = [new CdkStepLabel(this.part_1_label), new CdkStepLabel(this.part_2_label)];

      // this.stepLabels = [this.label_1, this.label_2];
      /* const step1: MatStep = new MatStep(this.stepper, null);
      step1.label = 'Create account';
      const step2: MatStep = new MatStep(this.stepper, null);
      step2.label = 'Add Details'; */
      // this.stepLabels = ["step1", "step2"];

      this.stepLabels = [this.label_1, this.label_2];

      console.log(this.stepTemplateRefs[0]);
    });

  }

  ngOnInit(): void {

    this.addAccountForm = this.fb.group({
      username: ['', Validators.required]
    });

    this.addUserDetailsForm = this.fb.group({
      firstname: ['', Validators.required]
    });

    this.stepForms = [this.addAccountForm, this.addUserDetailsForm];
    // this.stepLabels = ['Create account', 'User details'];

  }

}
