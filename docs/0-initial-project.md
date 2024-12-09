# Initial Project

``` bash
ng new angular18seed
```

- Which stylesheet format would you like to use? Sass (SCSS) <br/>
[https://sass-lang.com/documentation/syntax#scss]
- Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? ___No___

## Install Tailwind CSS
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
``` scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

``` bash
ng serve
```