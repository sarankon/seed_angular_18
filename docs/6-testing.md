Reference https://www.npmjs.com/package/@openapitools/openapi-generator-cli

https://openapi-generator.tech/docs/usage/ 
``` bash
npm install --global openapi-generator-cli
openapi-generator-cli list
```

``` bash
openapi-generator-cli generate --input-spec docs/openapi.json --generator-name typescript-angular --output ./src/app/openapi
```

``` bash
openapi-generator-cli generate --input-spec docs/openapi.json --generator-name typescript-angular --output ./src/app/openapi --additional-properties=ngVersion=18.2.12,npmName=restClient,supportsES6=true,npmVersion=10.8.2,withInterfaces=true
``` 
