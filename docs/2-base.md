``` bash
# Base Folder
ng generate module base --routing
ng generate component register --prefix base
ng generate component login --prefix base
ng generate component profile --prefix base
ng generate component logout --prefix base



ng generate service services/base-auth 
ng generate interceptor interceptors/base-api --functional false
ng generate guard guards/base --functional false 
ng generate guard guards/role --functional false 
ng generate guard guards/server --functional false 
? Which type of guard would you like to create? CanActivate, CanDeactivate, CanMatch

npm install jwt-decode
```