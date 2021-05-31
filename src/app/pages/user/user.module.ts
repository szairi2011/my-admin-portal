import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListModule } from './list/user-list.module';

import { UserRoutingModule } from './user-routing.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    ProfileModule,
    SharedModule,
    MatToolbarModule,
    UserListModule,
  ]
})
export class UserModule { }
