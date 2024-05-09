import { Component, inject } from '@angular/core';
import { AvisoComponent } from '../aviso/aviso.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

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
  ],
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  //https://www.youtube.com/watch?v=586O934xrhQ&t=41s
  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    this.authService
    .login(rawForm.email, rawForm.password)
    .subscribe({
      next: () => {
      this.router.navigateByUrl('/cuenta');
    },
    error: (err) => {
      this.errorMessage = err.code;
    }
  });
  }
}
