import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BaseGuard } from './guards/base.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  // Pages User
  { path: 'register', loadComponent: ()=> import('./pages-user/register/register.component').then((c) => c.RegisterComponent) },
  { path: 'login', loadComponent: ()=> import('./pages-user/login/login.component').then((c) => c.LoginComponent) },
  { 
    path: 'profile', 
    loadComponent: ()=> import('./pages-user/profile/profile.component').then((c) => c.ProfileComponent),
    canMatch: [BaseGuard, RoleGuard],
    data: { role: 'User' }
  },
  { 
    path: 'logout', 
    loadComponent: ()=> import('./pages-user/logout/logout.component').then((c) => c.LogoutComponent),
    canActivate: [BaseGuard]
  },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BaseRoutingModule {}
