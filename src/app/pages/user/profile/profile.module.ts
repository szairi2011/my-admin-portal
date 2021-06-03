import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

import { UserTaskActionsMenuComponent } from './components/user-task-actions-menu';
import { UserTasksComponent } from './components/user-tasks';
import { ProfilePageComponent } from './containers/profile-page';

@NgModule({
  declarations: [
    ProfilePageComponent,
    UserTasksComponent,
    UserTaskActionsMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule
  ]
})
export class ProfileModule { }
