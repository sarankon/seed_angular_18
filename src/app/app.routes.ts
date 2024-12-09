import { Routes } from '@angular/router';
import { DashboardComponent } from './demo/dashboard/dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // Demo, Please remove or comment when you not use
    { path: 'demo', component: DashboardComponent },
    { path: '', redirectTo: 'demo', pathMatch: 'full'},

    // In Your Project
    // { path: '', component: AppComponent}
];
