import { Component } from '@angular/core';
import { AvisoComponent } from '../aviso/aviso.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [AvisoComponent, HeaderComponent, FooterComponent],
})
export class LoginComponent {}
