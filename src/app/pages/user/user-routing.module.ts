import { UserListPageComponent } from './list/containers/user-list-page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile/containers/profile-page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    pathMatch: 'full',
    component: UserListPageComponent,
    data: { breadcrumb: 'list'}
  },
  {
    path: 'user',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfilePageComponent,
    data: { breadcrumb: 'profile'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
