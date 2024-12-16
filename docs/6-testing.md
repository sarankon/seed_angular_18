# Testing

## OpenAPI Generator
Reference: https://www.npmjs.com/package/@openapitools/openapi-generator-cli
Reference: https://openapi-generator.tech/docs/usage/ 
``` bash
npm install @openapitools/openapi-generator-cli
npx openapi-generator-cli version-manager list stable
npx openapi-generator-cli version-manager set <versionTags...>
```

``` json
// package.json
"scripts": {
    // ...
    "api-gen": "openapi-generator-cli generate -i http://localhost:3000/swagger-json -g typescript-angular -o ./src/api",
    "openapi-generate": "openapi-generator-cli generate -i http://localhost:3000/swagger-json -g typescript-angular -o ./src/app/api --additional-properties=ngVersion=18.2.13,npmName=restClient,supportsES6=true,npmVersion=10.8.2,withInterfaces=true"
    // ...
}
```


``` bash
openapi-generator-cli generate --input-spec docs/openapi.json --generator-name typescript-angular --output ./src/app/openapi
```

``` bash
openapi-generator-cli generate --input-spec docs/openapi.json --generator-name typescript-angular --output ./src/app/openapi --additional-properties=ngVersion=18.2.12,npmName=restClient,supportsES6=true,npmVersion=10.8.2,withInterfaces=true
``` 
