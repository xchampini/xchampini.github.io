import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../home/home').then((m) => m.Home),
  },
  {
    path: 'projects',
    loadChildren: () => import('../projects/projects-routes').then((m) => m.projectsRoutes),
  },
  { path: '**', redirectTo: '' },
];
