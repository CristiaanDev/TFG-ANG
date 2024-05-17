import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { UtilesService } from '../services/utiles.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const utiles = inject(UtilesService);

  let user = localStorage.getItem('user');

  return new Promise((resolve) => {
    authService.getAuth().onAuthStateChanged((authGuard) => {
      if (authGuard) {
        resolve(true);
      } else {
        utiles.routerLink('/login');
        resolve(false);
      }
    });
  });
};
