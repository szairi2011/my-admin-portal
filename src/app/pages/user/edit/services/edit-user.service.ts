
import { Injectable } from '@angular/core';
import { FormPartItem } from '../models';
import { EditUserAccountComponent, EditUserProfileComponent } from '../components/form-parts';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  formParts: FormPartItem[];

  constructor() { }

  initFormParts() {
    this.formParts = [
      {
        component: EditUserAccountComponent,
        data: 'Data for edit user account form part'
      },
      {
        component: EditUserProfileComponent,
        data: 'Date for edit user profile form part'
      }
    ];
  }

  loadFormPart(_idx:number) {
    return this.formParts[_idx];
  }
}
