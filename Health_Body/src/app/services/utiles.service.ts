import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilesService {
  private snackBar = inject(MatSnackBar);
  router = inject(Router);

  private loading = false;

  showLoading() {
    this.loading = true;
  }

  hideLoading() {
    this.loading = false;
  }

  isLoading() {
    return this.loading;
  }

  saveInLocaleStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string): User | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }
}
