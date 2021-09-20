import { AddUserDetailsComponent } from './../form-parts/add-user-details/add-user-details.component';
import { AddUserAccountComponent } from './../form-parts/add-user-account/add-user-account.component';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-add-user-form-part-loader',
  templateUrl: './add-user-form-part-loader.component.html',
  styleUrls: ['./add-user-form-part-loader.component.scss']
})
export class AddUserFormPartLoaderComponent implements OnInit, AfterViewInit {

  @Input('stepper') stepper: MatHorizontalStepper;

  stepTemplateRefs: TemplateRef<any>[];

  components: IAddPartComponent[];

  @ViewChild(AddUserAccountComponent) accountComponent: AddUserAccountComponent;

  @ViewChild(AddUserDetailsComponent) detailsComponent: AddUserDetailsComponent;

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(
      () => {
        this.stepTemplateRefs = [
          this.accountComponent.add_account,
          this.detailsComponent.user_details
        ];

        this.components = [this.accountComponent, this.detailsComponent]
      }
    )
  }
}

export interface IAddPartComponent {
  title: string;
}
