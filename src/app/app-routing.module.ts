import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [ 
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-portal/admin-portal.module').then(m => m.AdminPortalModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: AdminLoginComponent,
  }
 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
