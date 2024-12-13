# Utility

## Prettier
``` bash
npm install --save-dev prettier 
```

## Prettier (Tailwind CSS Plugin)
Reference: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
``` bash
npm install --save-dev prettier-plugin-tailwindcss
```

``` json
// .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## ESLint
``` bash
npm install eslint
npm install --save-dev eslint-config-prettier
```

``` json
// .eslintrc
{
    "extends": ["prettier"],
    "rules": {
        // "indent": "error"
    }
}
```

## Faker
Reference: https://fakerjs.dev/

### Install
``` bash
npm install --save-dev @faker-js/faker 
```

``` bash
ng generate component demo/faker --prefix demo
```

