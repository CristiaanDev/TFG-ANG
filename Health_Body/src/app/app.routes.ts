import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Inicio',
    loadComponent: () => import('./components/inicio/inicio.component').then((m) => m.InicioComponent),
  },
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full',
  },
  {
    path: 'cuenta',
    loadComponent: () => import('./components/cuenta/cuenta.component').then((m) => m.CuentaComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'recetas',
    loadComponent: () => import('./components/recetas/recetas.component').then((m) => m.RecetasComponent),
  },

];
