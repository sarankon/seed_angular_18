import { Routes } from '@angular/router'

export const routes: Routes = [
    // At Start (Temp)
    // { path: '', component: AppComponent}

    // Demo, Please remove or comment when you not use | Lazy Load
    { path: '', redirectTo: 'base', pathMatch: 'full' }, // Default
    { path: 'base', loadChildren: () => import('../base/base.module').then((m) => m.BaseModule) },
    { path: 'demo', loadChildren: () => import('../demo/demo.module').then((m) => m.DemoModule) },

    // In Your Project
    // { path: '', loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule) },
    { path: 'page', loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule) },
]
