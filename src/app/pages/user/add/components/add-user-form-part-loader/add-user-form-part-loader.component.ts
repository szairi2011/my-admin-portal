import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { IAddFormPartComponent } from '../../models';
import { AddUserAccountComponent, AddUserDetailsComponent } from '../form-parts';

@Component({
  selector: 'app-add-user-form-part-loader',
  templateUrl: './add-user-form-part-loader.component.html',
  styleUrls: ['./add-user-form-part-loader.component.scss']
})
export class AddUserFormPartLoaderComponent implements OnInit, AfterViewInit {

  @Input('stepper') stepper: MatHorizontalStepper;

  stepTemplateRefs: TemplateRef<any>[];

  components: IAddFormPartComponent[];

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
