import { Routes } from '@angular/router';
import { DashboardComponent } from './demo/dashboard/dashboard.component';
import { AppComponent } from './app.component';
// import { PagesRoutingModule } from './pages/pages-routing.module';

export const routes: Routes = [
    // At Start (Temp)
    // { path: '', component: AppComponent}

    // Demo, Please remove or comment when you not use | Lazy Load
    { path: '', redirectTo: 'demo', pathMatch: 'full'}, // Default
    { path: 'demo', loadChildren: ()=> import('./demo/demo.module').then(m => m.DemoModule) }, // Lazy Load

    // In Your Project
    // { path: '', loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule) },
    { path: 'page', loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule) },

];
