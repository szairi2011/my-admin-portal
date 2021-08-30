import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { NgModule } from '@angular/core';
import { UserEditPageComponent } from './containers/user-edit-page/user-edit-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditNavBarComponent } from './components/edit-nav-bar/edit-nav-bar.component';
import { EditUserFormPartLoaderComponent } from './components/edit-user-form-part-loader/edit-user-form-part-loader.component';
import { EditPartLoaderDirective } from './directives/edit-part-loader.directive';
import { EditUserService } from './services/edit-user.service';
import { EditUserAccountComponent } from './components/form-parts';
import { EditUserProfileComponent } from './components/form-parts/edit-user-profile/edit-user-profile.component';



@NgModule({
  declarations: [
    UserEditPageComponent,
    EditNavBarComponent,
    EditUserFormPartLoaderComponent,
    EditPartLoaderDirective,
    EditUserAccountComponent,
    EditUserProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    RouterModule
  ],
  providers: [
    EditUserService
  ]
})
export class EditUserModule { }
