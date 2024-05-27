import { Component, Input, inject } from '@angular/core';
import { AvisoComponent } from '../aviso/aviso.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { User } from '../../user.interface';
import { UtilesService } from '../../services/utiles.service';
import { DocumentData } from 'firebase/firestore';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    AvisoComponent,
    HeaderComponent,
    ReactiveFormsModule,
    FooterComponent,
    RouterLink,
    NgIf,
    FormsModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class LoginComponent {
  authService = inject(AuthService);
  utiles = inject(UtilesService);

  @Input() control!: FormControl;
  @Input() type!: FormControl;
  @Input() label!: FormControl;
  @Input() autocomplete!: FormControl;
  @Input() icon!: FormControl;

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      this.utiles.showLoading(); // Mostrar el spinner de carga
      this.authService
        .logIn(this.form.value as User)
        .then((res) => {
          this.getUserInfo(res.user.uid);
        })
        .catch((error) => {
          this.utiles.hideLoading(); // Ocultar el spinner de carga en caso de error
          //this.utiles.showToast('Error al iniciar sesión: ' + error.message);
          console.error('Error al iniciar sesión:', error);
        });
    }
  }

  getUserInfo(id: string) {
    if (this.form.valid) {
      const path = `users/${id}`;
      this.authService
        .getDocument(path)
        .then((doc: DocumentData | undefined) => {
          if (doc) {
            const user = doc as User;
            this.utiles.saveInLocaleStorage('user', user);
            // Ocultar el spinner de carga

            this.utiles.hideLoading();
            this.form.reset();
            console.log(`${user.username}`);
            this.utiles.routerLink('/cuenta');
          } else {
            this.utiles.hideLoading(); // Ocultar el spinner de carga en caso de error
            console.error('No se encontró el documento del usuario');
          }
        })
        .catch((error) => {
          this.utiles.hideLoading(); // Ocultar el spinner de carga en caso de error
          console.error('Error al registrar usuario:', error);
        });
    }
  }
}
