import { Routes } from '@angular/router';

export const ADMIN_PATH = {
  DASHBOARD: 'dashboard',
  SETTINGS: 'settings',
};

export default [
  {
    path: '',
    loadComponent: () =>
      import('./admin.component').then((c) => c.AdminComponent),
    children: [
      {
        path: ADMIN_PATH.DASHBOARD,
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: ADMIN_PATH.SETTINGS,
        loadComponent: () =>
          import('./profile/profile.component').then((c) => c.ProfileComponent),
      },
    ],
  },
] as Routes;
