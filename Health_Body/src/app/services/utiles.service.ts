import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilesService {
  private snackBar = inject(MatSnackBar);
  router = inject(Router);

  private loading = false;

  showToast(
    message: string,
    action: string = 'Cerrar',
    duration: number = 3000
  ) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

  showLoading() {
    this.loading = true;
  }

  hideLoading() {
    this.loading = false;
  }

  isLoading() {
    return this.loading;
  }

  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  saveInLocaleStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getFromLocalStorage(key: string) {
    return localStorage.getItem(key);
  }
}
