import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import firebase from 'firebase/compat/app';
import { LoadingSpinnerComponent } from './components/loading-spinner.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InicioComponent,
    CuentaComponent,
    RecetasComponent,
    LoadingSpinnerComponent,
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HEALTH BODY';
}
