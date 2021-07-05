import { UserEditPageComponent } from './edit/containers/user-edit-page/user-edit-page.component';
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
  },
  {
    path: 'edit',
    pathMatch: 'full',
    component: UserEditPageComponent,
    data: { breadcrumb: 'Edit user'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
