import { Routes } from '@angular/router';

export const projectsRoutes: Routes = [
  { path: '', loadComponent: () => import('./projects').then((m) => m.Projects) },
  {
    path: 'league-of-legends-calendar',
    loadComponent: () => import('../league-project/league-project').then((m) => m.LeagueProject),
  },
  {
    path: 'meme-generator',
    loadComponent: () => import('../meme-generator/meme-generator').then((m) => m.MemeGenerator),
  },
  {
    path: 'this-portfolio',
    loadComponent: () => import('../this-portfolio/this-portfolio').then((m) => m.ThisPortfolio),
  },
  {
    path: 'local-esports-group',
    loadComponent: () =>
      import('../local-esports-group/local-esports-group').then((m) => m.LocalEsportsGroup),
  },
  { path: '**', redirectTo: '' },
];
