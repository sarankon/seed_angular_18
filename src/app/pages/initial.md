# Generate Module with Route
``` bash
ng generate module pages --routing 
```

:page_with_curl: app.routes.ts
``` ts
export const routes: Routes = [
    // ... 
    // In Your Project
    { path: 'page', loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule) }
]
```

# Generate Component (No Standalone)
``` bash
ng generate component pages/main --standalone false --prefix page
ng generate component pages/error/page-not-found --prefix page
```

:page_with_curl: pages-routing.module.ts
``` ts
const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '**', loadComponent: ()=> import('./error/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent) }
];
```

