# Generate Module with Route
``` bash
ng generate module pages --routing 
```

:page_with_curl: app.routes.ts
``` js
    export const routes: Routes = [
    // ... 
    // In Your Project
    { path: 'page', loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule) },
];
```

# Generate Component (No Standalone)
``` bash
ng generate component pages/main --standalone false --prefix page
ng generate component pages/main-alone --prefix page
ng generate component pages/page-not-found --prefix page
```

:page_with_curl: pages-routing.module.ts
``` js
const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main-alone', loadComponent: ()=> import('./main-alone/main-alone.component').then(c => c.MainAloneComponent) },
  { path: '**', loadComponent: ()=> import('./page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) },
];
```
