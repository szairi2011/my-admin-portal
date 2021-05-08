import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './containers/header/header.component';

import { SearchComponent } from './components';
import { NotificationsComponent } from './components';
import { EmailComponent } from './components';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { InitialsPipe } from './pipes/initials.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    NotificationsComponent,
    EmailComponent,
    InitialsPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
