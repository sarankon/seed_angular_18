import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'register', loadComponent: ()=> import('./register/register.component').then((c) => c.RegisterComponent) },
  { path: 'login', loadComponent: ()=> import('./login/login.component').then((c) => c.LoginComponent) },
  { 
    path: 'profile', 
    loadComponent: ()=> import('./profile/profile.component').then((c) => c.ProfileComponent),
    canActivate: [authGuard]
  },
  { 
    path: 'logout', 
    loadComponent: ()=> import('./logout/logout.component').then((c) => c.LogoutComponent),
    canActivate: [authGuard]
  },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', loadComponent: ()=> import('./notfound/notfound.component').then((c) => c.NotfoundComponent) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BaseRoutingModule {}
