import { Routes } from '@angular/router';

export const PAGE_PATH = {
  HOME: '',
  ABOUT: 'about',
  AUTHPAGES: 'auth',
  ADMIN: 'admin',
};

export const routes: Routes = [
  {
    path: PAGE_PATH.HOME,
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: PAGE_PATH.ABOUT,
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: PAGE_PATH.AUTHPAGES,
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: PAGE_PATH.ADMIN,
    loadChildren: () => import('./admin/admin.routes'),
  },
];
