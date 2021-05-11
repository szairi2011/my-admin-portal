import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ProfileModule,
    SharedModule,
    MatToolbarModule
  ]
})
export class UserModule { }
