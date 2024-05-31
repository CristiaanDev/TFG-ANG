import { Component, Input, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AvisoComponent } from '../aviso/aviso.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { User } from '../../user.interface';
import { UtilesService } from '../../services/utiles.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  imports: [
    FooterComponent,
    HeaderComponent,
    AvisoComponent,
    RouterLink,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class RegistroComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);
  utiles = inject(UtilesService);

  @Input() control!: FormControl;
  @Input() type!: FormControl;
  @Input() label!: FormControl;
  @Input() autocomplete!: FormControl;
  @Input() icon!: FormControl;

  form = new FormGroup({
    id: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  onSubmit() {
    if (this.form.valid) {
      this.utiles.showLoading();
      this.authService
        .register(this.form.value as User)
        .then(() => {
          this.utiles.hideLoading();
          this.utiles.routerLink('/login');
        })
        .catch((error) => {
          this.utiles.hideLoading();
          console.error('Error al registrar usuario:', error);
        });
    }
  }
}
