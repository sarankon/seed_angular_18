import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardNormalComponent } from './dashboard-normal/dashboard-normal.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // Stanalone Component
  { path: 'dashboard', loadComponent: ()=> import('./dashboard/dashboard.component').then(c => c.DashboardComponent) },
  // Component
  { path: 'dashboard-normal', component: DashboardNormalComponent },

  // Lazy Module and Lazy Component
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },

  // Faker
  { path: 'faker', loadComponent: ()=> import('./faker/faker.component').then(c => c.FakerComponent) },

  // CRUD
  { path: 'crud', loadComponent: ()=> import('./crud/crud.component').then(c => c.CrudComponent) },

  // Upload
  { path: 'upload', loadComponent: ()=> import('./upload/upload.component').then(c => c.UploadComponent) }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule { }
