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
  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component').then((m) => m.BlogComponent),
  },
  {
    path: 'aviso',
    loadComponent: () => import('./components/aviso/aviso.component').then((m) => m.AvisoComponent),
  },{
    path: 'recuperar-contraseña',
    loadComponent: () => import('./components/recuperar-password/recuperar-password.component').then((m) => m.RecuperarPasswordComponent),
  },
  {
    path: 'registro',
    loadComponent: () => import('./components/registro/registro.component').then((m) => m.RegistroComponent),
  },

];
