import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { IAddFormPartComponent } from '../../../models';

@Component({
  selector: 'app-add-user-business-details',
  templateUrl: './add-user-business-details.component.html',
  styleUrls: ['./add-user-business-details.component.scss']
})
export class AddUserBusinessDetailsComponent implements OnInit, IAddFormPartComponent {

  @Input('stepper') stepper: MatHorizontalStepper;

  addBusinessDetailsForm: FormGroup;

  title = 'Create Business Details';

  @ViewChild('add_business_details') business_details : TemplateRef<any>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addBusinessDetailsForm = this.fb.group({
      company: ['', Validators.required],
    });
  }

}
