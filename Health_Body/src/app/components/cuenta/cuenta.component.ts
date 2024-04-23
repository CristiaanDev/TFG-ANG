import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [MatSidenavModule, RouterLink,MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule,IconFieldModule, InputIconModule],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss'
})
export class CuentaComponent {
}

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAgNUY3lChS3VxtR4R4zR8mpMnMCR5UeI",
  authDomain: "healthbody-4910f.firebaseapp.com",
  projectId: "healthbody-4910f",
  storageBucket: "healthbody-4910f.appspot.com",
  messagingSenderId: "851826386849",
  appId: "1:851826386849:web:868fe05358f3497ab28de0",
  measurementId: "G-M0EZMLSWX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/
