import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { UtilesService } from '../../services/utiles.service';
import { User } from '../../user.interface';
import { MatDialog } from '@angular/material/dialog';
import { CompletarUsuarioComponent } from '../completar-usuario/completar-usuario.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.scss'],
  standalone: true,
  imports: [AsyncPipe, TitleCasePipe, NgIf],
})
export class PanelPrincipalComponent implements OnInit, OnDestroy {
  authService = inject(AuthService);
  utiles = inject(UtilesService);
  dialog = inject(MatDialog);

  user: User | null = null;
  isAuthenticated: boolean = false;
  username: string | null = null;

  private authSubscription!: Subscription;
  private usernameSubscription!: Subscription;

  ngOnInit(): void {
    this.loadUser();

    this.authSubscription = this.authService.currentUser$.subscribe((user) => {
      this.isAuthenticated = !!user;
      if (user) {
        this.authService.getUserData(user.uid).then((userData) => {
          if (userData) {
            const storedUser = { ...userData, id: user.uid };
            this.utiles.saveInLocaleStorage('user', storedUser);
            this.user = storedUser;
          }
        });
      }
    });

    this.usernameSubscription = this.authService.username$.subscribe(
      (username) => {
        this.username = username;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.usernameSubscription) {
      this.usernameSubscription.unsubscribe();
    }
  }

  loadUser(): void {
    this.user = this.utiles.getFromLocalStorage('user');
    if (this.user) {
      this.username = this.user.username;
    }
  }

  addCompletUser(): void {
    const dialogRef = this.dialog.open(CompletarUsuarioComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUser();
    });
  }
}
