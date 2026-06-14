import { Routes } from '@angular/router';

export const uikitRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'form-layout' },
  { path: 'form-layout', loadComponent: () => import('./formlayoutdemo').then((m) => m.FormLayoutDemo) },
  { path: 'input', loadComponent: () => import('./inputdemo').then((m) => m.InputDemo) },
  { path: 'button', loadComponent: () => import('./buttondemo').then((m) => m.ButtonDemo) },
  { path: 'table', loadComponent: () => import('./tabledemo').then((m) => m.TableDemo) },
  { path: 'list', loadComponent: () => import('./listdemo').then((m) => m.ListDemo) },
  { path: 'panel', loadComponent: () => import('./panelsdemo').then((m) => m.PanelsDemo) },
  { path: 'overlay', loadComponent: () => import('./overlaydemo').then((m) => m.OverlayDemo) },
  { path: 'message', loadComponent: () => import('./messagesdemo').then((m) => m.MessagesDemo) },
  { path: 'menu', loadComponent: () => import('./menudemo').then((m) => m.MenuDemo) },
  { path: 'tree', loadComponent: () => import('./treedemo').then((m) => m.TreeDemo) },
  { path: 'timeline', loadComponent: () => import('./timelinedemo').then((m) => m.TimelineDemo) },
  { path: 'misc', loadComponent: () => import('./miscdemo').then((m) => m.MiscDemo) },
  { path: 'chart', loadComponent: () => import('./chartdemo').then((m) => m.ChartDemo) },
  { path: 'file', loadComponent: () => import('./filedemo').then((m) => m.FileDemo) },
  { path: 'crud', redirectTo: '/crud' }
];

export default uikitRoutes;
