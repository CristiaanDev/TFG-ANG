import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AvisoComponent } from '../aviso/aviso.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
  imports: [
    FooterComponent,
    HeaderComponent,
    AvisoComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
})
export class RegistroComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  //https://www.youtube.com/watch?v=586O934xrhQ&t=41s
  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    this.authService.registro(rawForm.email, rawForm.username, rawForm.password)
    .subscribe({
      next: () => {
      this.router.navigateByUrl('/login');
    },
    error: (err) => {
      this.errorMessage = err.code;
    }
  });
  }
}
