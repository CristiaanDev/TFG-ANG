import { Component, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { AvisoComponent } from '../aviso/aviso.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

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
export class RegistroComponent {}
