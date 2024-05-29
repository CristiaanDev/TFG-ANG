import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { UtilesService } from '../services/utiles.service';

export const nAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const utiles = inject(UtilesService);

  return new Promise((resolve) => {
    authService.currentUser$.subscribe((user) => {
      if (!user) {
        resolve(true);
      } else {
        utiles.routerLink('/cuenta');
        resolve(false);
      }
    });
  });
};
