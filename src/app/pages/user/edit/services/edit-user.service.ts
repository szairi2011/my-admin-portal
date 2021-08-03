import { EditUserAccountComponent } from './../components/form-parts/edit-user-account/edit-user-account.component';
import { Injectable } from '@angular/core';
import { FormPartItem } from '../models';

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
        data: 'Hello user ...'
      }
    ];
  }

  loadFormPart(_idx:number) {
    return this.formParts[_idx];
  }
}
