import { MatHorizontalStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-add-user-form-part-loader',
  templateUrl: './add-user-form-part-loader.component.html',
  styleUrls: ['./add-user-form-part-loader.component.scss']
})
export class AddUserFormPartLoaderComponent implements OnInit, AfterViewInit {

  addAccountForm: FormGroup;
  addUserDetailsForm: FormGroup;

  stepTemplateRefs: TemplateRef<any>[];

  @ViewChild('part_1') part_1: TemplateRef<any>;
  @ViewChild('part_2') part_2: TemplateRef<any>;

  @Input('stepper') stepper: MatHorizontalStepper;

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.addAccountForm = this.fb.group({
      username: ['', Validators.required]
    });

    this.addUserDetailsForm = this.fb.group({
      firstname: ['', Validators.required]
    });

  }

  ngAfterViewInit(): void {
    setTimeout(
      () => this.stepTemplateRefs = [this.part_1, this.part_2]
    )
  }
}
