import { Injectable } from '@angular/core';
import { UserInfo } from 'src/app/store/models';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor() { }

  user: UserInfo;

  addBufferedInfo(userStepInfo : Partial<UserInfo>) {
    this.user = {... this.user, ... userStepInfo};
    console.log('The updated user info: ', this.user);
  }

}
