import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss'
})
export class CuentaComponent {
}
