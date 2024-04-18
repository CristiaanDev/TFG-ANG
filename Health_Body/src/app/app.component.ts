import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, CuentaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Health_Body';
}
