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
import { StoreModule } from '@ngrx/store';
import * as fromUserTask from '../../../store/reducers/user-task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserTaskEffects } from '../../../store/effects/user-task.effects';

import { UserTaskService } from './services/user-task.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProfilePageComponent,
    UserTasksComponent,
    UserTaskActionsMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    StoreModule.forFeature(fromUserTask.userTasksFeatureKey, fromUserTask.reducer),
    EffectsModule.forFeature([UserTaskEffects]),
    // StoreModule.forFeature(fromUserTask.userTasksFeatureKey, fromUserTask.reducer),
    // EffectsModule.forFeature([UserTaskEffects])
  ],
  providers: [
    UserTaskService
  ]
})
export class ProfileModule { }
