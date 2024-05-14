import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { BlogComponent } from './components/blog/blog.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full',
  },
  { path: 'Inicio', component: InicioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'recetas', component: RecetasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'aviso', component: InicioComponent },
  { path: 'cuenta', component: CuentaComponent, canActivate: [authGuard] },
];
