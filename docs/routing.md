# Routing Guidelines

Lumina NG uses Angular 21 standalone routing patterns.

## Recommended

Use `loadComponent` for individual pages:

```ts
{
  path: 'dashboard',
  loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard)
}
```

Use `loadChildren` for route groups:

```ts
{
  path: 'ui',
  loadChildren: () => import('./pages/uikit/uikit.routes').then((m) => m.uikitRoutes)
}
```

## Alternative

Direct child route arrays can work, but the preferred template convention is `loadChildren` for grouped sections.
