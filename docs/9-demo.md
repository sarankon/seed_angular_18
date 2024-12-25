# Create Module with Route
``` bash
ng generate module demo --routing

```

# Create Component (Standalone)

``` bash
ng generate component demo/dashboard --prefix demo
ng generate component demo/crud --prefix demo
ng generate component demo/upload --prefix demo
```

# Create Component (Not Stanalone)

``` bash
ng generate component demo/dashboard-normal --standalone false --prefix demo
```

# Create Module & Component (Lazy Load)
It will create module and component, then update route (at demo route)
``` bash
ng generate module demo/lazy --route lazy --module demo
```

# Create Module & Component (Lazy Load)
Import module for use Component
``` bash
ng generate module demo/lazy/sub
ng generate component demo/lazy/sub --standalone false --prefix sub --module sub --export true
```