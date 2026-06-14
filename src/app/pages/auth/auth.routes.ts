import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadComponent: () => import('./login').then((m) => m.Login) },
  { path: 'access', loadComponent: () => import('./access').then((m) => m.Access) },
  { path: 'error', loadComponent: () => import('./error').then((m) => m.ErrorPage) }
];

export default authRoutes;
