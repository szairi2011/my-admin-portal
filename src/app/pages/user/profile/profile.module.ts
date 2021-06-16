import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';


import { ProfilePageComponent } from './containers/profile-page';
import { StoreModule } from '@ngrx/store';
import * as fromUserTask from '../../../store/reducers/user-task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserTaskEffects } from '../../../store/effects/user-task.effects';

import { UserTaskService } from './services/user-task.service';
import { HttpClientModule } from '@angular/common/http';
import { UpdateUserTaskComponent } from './components/todo/crud/update-user-task/update-user-task.component';
import { UserTaskActionsMenuComponent, UserTasksComponent } from './components/todo';
import { AddUserTaskComponent } from './components/todo/crud/add-user-task/add-user-task.component';
import { UserTaskAddActionComponent } from './components/todo/user-task-add-action/user-task-add-action.component';

@NgModule({
  declarations: [
    ProfilePageComponent,
    UserTasksComponent,
    UserTaskActionsMenuComponent,
    UpdateUserTaskComponent,
    AddUserTaskComponent,
    UserTaskAddActionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    StoreModule.forFeature(fromUserTask.userTasksFeatureKey, fromUserTask.reducer),
    EffectsModule.forFeature([UserTaskEffects])
  ],
  providers: [
    UserTaskService
  ]
})
export class ProfileModule { }
