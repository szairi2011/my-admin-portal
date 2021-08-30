import { AppState } from './../../../../../../store/index';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { IEditFormPartComponent } from '../../../models';
import { selectLoggedInUserInfo } from 'src/app/store/selectors';
import { UserInfo } from 'src/app/store/models';

@Component({
  selector: 'app-edit-user-account',
  templateUrl: './edit-user-account.component.html',
  styleUrls: ['./edit-user-account.component.scss']
})
export class EditUserAccountComponent implements OnInit, IEditFormPartComponent {

  @Input() data?: any;

  editAccountForm: FormGroup;
  user: UserInfo;


  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {

    this.store.select(selectLoggedInUserInfo).subscribe(
      (usr) => this.user = usr
    )

    this.editAccountForm = this.fb.group({
      username: [this.user.username, Validators.required],
      email: [this.user.email, Validators.required],
      // role: [this.user.role]
    });
  }

  saveAccount() {
    console.log("Saving user account info ...");
    // this.store.dispatch()
  }

}
