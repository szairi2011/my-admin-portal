import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './pages/auth/containers/auth-page';
import { AuthGuard } from './pages/auth/guards';
import { DashboardPageComponent } from './pages/dashboard/containers/dashboard-page';


const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: AuthPageComponent
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: DashboardPageComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
