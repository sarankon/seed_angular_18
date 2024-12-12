# Initial Project
``` bash
npm install -g @angular/cli@18
ng new angular18seed
```

- Which stylesheet format would you like to use? Sass (SCSS) <br/>
[https://sass-lang.com/documentation/syntax#scss]
- Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? ___No___

## Install Tailwind CSS
Reference: https://tailwindcss.com/docs/guides/angular
``` bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

:page_with_curl: tailwind.config.js
``` js 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

:page_with_curl: styles.scss
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

``` bash
ng serve
```

## Install PrimeNG 
Reference: https://v18.primeng.org/installation <br/>
Reference: https://v18.primeng.org/tailwind <br/>
Reference: https://v18.primeng.org/icons

``` bash
npm install primeng @primeng/themes
npm i tailwindcss-primeui
npm install primeicons
```

:page_with_curl: app.config.ts
``` js
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({ 
        ripple: true,
        theme: {
            preset: Aura,
        }
    })
  ]
};
```

:page_with_curl: tailwind.config.js
``` js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [require('tailwindcss-primeui')]
};
```

:page_with_curl: styles.scss
``` css
/* ... */
@import "primeicons/primeicons.css";
```
