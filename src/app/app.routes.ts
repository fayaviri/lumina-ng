import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app-layout/app.layout';

export const routes: Routes = [
  {
    path: 'landing',
    loadComponent: () => import('./pages/landing/landing').then((m) => m.Landing)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.authRoutes)
  },
  {
    path: '',
    component: AppLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard)
      },
      {
        path: 'crud',
        loadComponent: () => import('./pages/crud/crud').then((m) => m.Crud)
      },
      {
        path: 'documentation',
        loadComponent: () => import('./pages/documentation/documentation').then((m) => m.Documentation)
      },
      {
        path: 'empty',
        loadComponent: () => import('./pages/empty/empty').then((m) => m.Empty)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/empty/empty').then((m) => m.Empty)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/empty/empty').then((m) => m.Empty)
      },
      {
        path: 'ui',
        loadChildren: () => import('./pages/uikit/uikit.routes').then((m) => m.uikitRoutes)
      },
      {
        path: 'notfound',
        loadComponent: () => import('./pages/notfound/notfound').then((m) => m.NotFound)
      }
    ]
  },
  { path: '**', redirectTo: 'notfound' }
];
