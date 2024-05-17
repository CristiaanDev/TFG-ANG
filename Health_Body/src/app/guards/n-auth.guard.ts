import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { UtilesService } from '../services/utiles.service';

export const nAuthGuard: CanActivateFn = (route, state) => {

const authService = inject(AuthService);
  const utiles = inject(UtilesService);


  return new Promise((resolve) => {
    authService.getAuth().onAuthStateChanged((authGuard) => {
      if (!authGuard) {
        resolve(true);
      } else {
        utiles.routerLink('/cuenta');
        resolve(false);
      }
    });
  });
};
