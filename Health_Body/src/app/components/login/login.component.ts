import { Component, inject } from '@angular/core';
import { AvisoComponent } from '../aviso/aviso.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';

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
  ],
})
export class LoginComponent {}
