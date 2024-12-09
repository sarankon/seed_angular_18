import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main-alone', loadComponent: ()=> import('./main-alone/main-alone.component').then(c => c.MainAloneComponent) },
  { path: '**', loadComponent: ()=> import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
