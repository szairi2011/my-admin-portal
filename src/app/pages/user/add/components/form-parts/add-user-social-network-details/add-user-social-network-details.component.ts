import { IAddFormPartComponent } from './../../../models/add-form-part.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { UserInfo } from 'src/app/store/models';
import { AddUserService } from '../../../services';

@Component({
  selector: 'app-add-user-social-network-details',
  templateUrl: './add-user-social-network-details.component.html',
  styleUrls: ['./add-user-social-network-details.component.scss']
})
export class AddUserSocialNetworkDetailsComponent implements OnInit, IAddFormPartComponent {

  @Input('stepper') stepper: MatHorizontalStepper;

  addSocialNetworkForm: FormGroup;

  title = 'Social Network Details';

  @ViewChild('social_network_details') social_network_details: TemplateRef<any>;

  constructor(
    private fb: FormBuilder,
    private addUserService: AddUserService
  ) { }

  ngOnInit(): void {
    this.addSocialNetworkForm = this.fb.group({
      facebook: null,
      twitter: null,
      instagram: null,
      company_contact: null,
      github: null
    });
  }

  // perform partial update on the buffered user
  addSocialNetworkInfo() {
    const socialNetworkInfo: Partial<UserInfo> = {
      facebook: this.addSocialNetworkForm.get('facebook').value,
      twitter: this.addSocialNetworkForm.get('twitter').value,
      instagram: this.addSocialNetworkForm.get('instagram').value,
      company_contact: this.addSocialNetworkForm.get('company_contact').value,
      github: this.addSocialNetworkForm.get('github').value
    }

    this.addUserService.addBufferedInfo(socialNetworkInfo);

    this.stepper.next();
  }

}
