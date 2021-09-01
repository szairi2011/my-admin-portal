import { Update } from '@ngrx/entity';
import { AppState } from './../../../../../../store/index';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { IEditFormPartComponent, UserRole } from '../../../models';
import { selectLoggedInUserInfo, selectUserById } from 'src/app/store/selectors';
import { UserInfo } from 'src/app/store/models';
import { updateUserInfo } from 'src/app/store/actions';

@Component({
  selector: 'app-edit-user-account',
  templateUrl: './edit-user-account.component.html',
  styleUrls: ['./edit-user-account.component.scss']
})
export class EditUserAccountComponent implements OnInit, IEditFormPartComponent {

  @Input() data?: any;

  editAccountForm: FormGroup;

  user: UserInfo;

  userRoles: UserRole[] = [
    {
      viewName: 'User',
      value: 'user'
    },
    {
      viewName: 'Admin',
      value: 'admin'
    }
  ];

  selectedRole: string;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.store.select(selectLoggedInUserInfo).subscribe(
      usr => this.user = usr
    );

    /* this.store.select(selectLoggedInUserInfo).subscribe(
      (usr) => {
        this.store.select(selectUserById, { id: usr.id }).subscribe(
          (_user) => {
            this.user = _user;
            // this.initForm();
          }
        )
      }
    ); */

    this.editAccountForm = this.fb.group({
      username: [this.user.username, Validators.required],
      email: [this.user.email,
      [Validators.required, Validators.email]],
      role: [this.user.role]
    });

    // Set default entry in template if user has already adequate role
    const target = this.userRoles.findIndex((role) => role.value == this.user.role);
    if (target > -1) {
      this.selectedRole = this.user.role;
    }

  }

  initForm() {

  }

  updateAccount() {
    console.log("Saving user account info ...");
    const toUpdate: Update<UserInfo> = {
      id: this.user.id,
      changes: {
        username: this.editAccountForm.controls.username.value,
        email: this.editAccountForm.controls.email.value,
        role: this.editAccountForm.controls.role.value
      }
    }

    this.store.dispatch(updateUserInfo({ userInfo: toUpdate }));
  }

}
