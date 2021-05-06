
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './containers/auth-page';
import { AuthGuard } from './guards';
import { AuthService } from './services/auth.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { YearPipe } from './pipes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AuthPageComponent,
    LoginFormComponent,
    YearPipe
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
