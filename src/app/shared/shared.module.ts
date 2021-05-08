import { HeaderComponent } from './header/containers/header/header.component';
import { HeaderModule } from './header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';

import { LayoutComponent } from './layout/layout.component';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    SettingsMenuComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule
  ],
  exports: [
    SettingsMenuComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
