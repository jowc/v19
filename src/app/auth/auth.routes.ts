import { Routes } from '@angular/router';

export const AUTH_PATH = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default [
  {
    path: AUTH_PATH.LOGIN,
    loadComponent: () =>
      import('./features/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: AUTH_PATH.REGISTER,
    loadComponent: () =>
      import('./features/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },
] as Routes;
