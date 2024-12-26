``` bash
# Base Folder
ng generate module base --routing
ng generate component register --prefix base
ng generate component login --prefix base
ng generate component profile --prefix base
ng generate component logout --prefix base

ng generate interceptor intercepter/api
ng generate guard guard/auth
```