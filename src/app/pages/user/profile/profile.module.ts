import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class ProfileModule { }
