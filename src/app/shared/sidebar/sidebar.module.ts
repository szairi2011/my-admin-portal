import { LeftnavComponent } from './containers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LeftnavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    LeftnavComponent
  ]
})
export class SidebarModule { }
