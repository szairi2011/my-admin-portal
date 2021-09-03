import { Update } from '@ngrx/entity';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/store/models';
import { routes } from 'src/app/consts';
import { AppState } from 'src/app/store';
import { selectLoggedInUserInfo } from 'src/app/store/selectors';
import { updateUserInfo } from 'src/app/store/actions';
import { IEditFormPartComponent } from '../../../models';

@Component({
  selector: 'app-edit-user-creds',
  templateUrl: './edit-user-creds.component.html',
  styleUrls: ['./edit-user-creds.component.scss']
})
export class EditUserCredsComponent implements OnInit, IEditFormPartComponent {

  @Input() data: any;

  editCredsForm: FormGroup;

  user: UserInfo;

  routes: routes;

  // Hide current password by default
  hide_current: boolean = true;
  // Hide new password by default
  hide_new: boolean = true;
  // Hie verify password by default
  hide_verify: boolean = true;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.store.select(selectLoggedInUserInfo).subscribe(
      usr => this.user = usr
    );

    this.editCredsForm = this.fb.group({
      current_password: ['', Validators.required],
      new_password: ['', Validators.required],
      verify_password: ['', Validators.required]
    });

  }

  updateCreds() {

    console.log("Verifying user credentials info ...");

    // if (this.isValid()) {

      console.log("Saving user credentials info ...");

      const toUpdate: Update<UserInfo> = {
        id: this.user.id,
        changes: {
          password: this.editCredsForm.controls.new_password.value
        }
      }

      this.store.dispatch(updateUserInfo({ userInfo: toUpdate }));

      const activeUrl = this.router.url
      setTimeout(() => {
        this.router.navigateByUrl(routes.DASHBOARD_PAGE, { skipLocationChange: false }).then(() =>
          this.router.navigate([activeUrl]));
      }, 500)
    // }
  }

  isValid() {
    const cur_pwd = this.editCredsForm.controls.current_password.value;
    const new_pwd = this.editCredsForm.controls.new_password.value;
    const verify_pwd = this.editCredsForm.controls.verify_password.value;

    const _isValidChange = (cur_pwd && cur_pwd == this.user.password && cur_pwd != new_pwd && new_pwd == verify_pwd);

    return _isValidChange;
  }

  checkCurrentCreds() {
    const current_pwd_control = this.editCredsForm.controls['current_password']
    const isValid = (this.user.password == current_pwd_control.value);
    if (!isValid) {
      current_pwd_control.setErrors({ 'incorrect': true});
    }
    else {
      current_pwd_control.setErrors(null);
    }
  }

}
