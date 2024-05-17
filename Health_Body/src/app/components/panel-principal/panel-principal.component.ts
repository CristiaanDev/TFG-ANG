import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { UtilesService } from '../../services/utiles.service';
import { User } from '../../user.interface';
import { MatDialog } from '@angular/material/dialog';
import { CompletarUsuarioComponent } from '../completar-usuario/completar-usuario.component';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgIf],
})
export class PanelPrincipalComponent implements OnInit {
  authService = inject(AuthService);
  utiles = inject(UtilesService);
  dialog = inject(MatDialog);

  user: User | null = null;

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.user = this.utiles.getFromLocalStorage('user');
  }

  addCompletUser() {
    const dialogRef = this.dialog.open(CompletarUsuarioComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadUser();
    });
  }
}
