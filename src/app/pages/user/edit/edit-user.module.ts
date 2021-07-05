import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditPageComponent } from './containers/user-edit-page/user-edit-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [UserEditPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EditUserModule { }
