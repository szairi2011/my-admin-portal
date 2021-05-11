import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfilePageComponent } from './profile/containers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    ProfileModule,
    SharedModule
  ]
})
export class UserModule { }
