import { Routes } from '@angular/router';

export const projectsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: 'bmw',
    loadComponent: () =>
      import('../project-bmw/project-bmw.component').then(m => m.ProjectBmwComponent),
  },
  {
    path: 'dreicon',
    loadComponent: () =>
      import('../project-dreicon/project-dreicon.component').then(m => m.ProjectDreiconComponent),
  },
  {
    path: 'icsunonove',
    loadComponent: () =>
      import('../project-icsunonove/project-icsunonove.component').then(m => m.ProjectIcsunonoveComponent),
  },
];
