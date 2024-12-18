# Testing

## OpenAPI Generator
Reference: https://www.npmjs.com/package/@openapitools/openapi-generator-cli
Reference: https://openapi-generator.tech/docs/usage/ 
Reference: https://openapi-generator.tech/docs/generators/


``` bash
npm install @openapitools/openapi-generator-cli
npx openapi-generator-cli version-manager list stable
npx openapi-generator-cli version-manager set <versionTags...>
```

``` json
// package.json
"scripts": {
    // ...
    "generate-api": "openapi-generator-cli generate -i http://localhost:3000/swagger-json -g typescript-angular -o ./src/api --additional-properties=npmVersion=10.8.2,npmName=restClient,supportsES6=true,ngVersion=18.2.13,withInterfaces=true"
    // ...
}
```

## Normal
``` bash
openapi-generator-cli generate --input-spec docs/openapi.json --generator-name typescript-angular --output ./src/openapi
```

Reference: https://openapi-generator.tech/docs/generators/typescript-angular/
## With Additional Properties
``` bash
openapi-generator-cli generate --input-spec docs/openapi.json --generator-name typescript-angular --output ./src/openapi ----additional-properties=npmVersion=10.8.2,npmName=restClient,supportsES6=true,ngVersion=18.2.13,withInterfaces=true
``` 

## With Additional Properties (Config File)
``` bash
openapi-generator-cli generate --input-spec docs/openapi.json --generator-name typescript-angular --output ./src/openapi --config ./openapi-generator.config.json
```

``` json
// openapi-generator.config.json
{
    "npmName": "restClient",
    "npmVersion": "10.8.2",
    "supportsES6": true,
    "ngVersion": "18.2.13",
    "withInterfaces": true
}
```