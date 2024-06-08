import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UtilesService } from '../../services/utiles.service';
import { User } from '../../user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-semanal',
  standalone: true,
  templateUrl: './menu-semanal.component.html',
  styleUrls: ['./menu-semanal.component.scss'],
  imports: [CommonModule],
})
export class MenuSemanalComponent implements OnInit {
  authService = inject(AuthService);
  utiles = inject(UtilesService);

  images = [
    'assets/img/Menu1.png',
    'assets/img/Menu2.png',
    'assets/img/Menu3.png',
    'assets/img/Menu4.png',
    'assets/img/Menu5.png',
  ];
  currentImage = this.images[0];
  user: User | null = null;

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    this.user = this.utiles.getFromLocalStorage('user');
  }

  generateRandomMenu(): void {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    this.currentImage = this.images[randomIndex];
  }

  addMenuToUser(): void {
    if (this.user) {
      this.user.menuImage = this.currentImage;
      this.authService
        .setDocument(`users/${this.user.id}`, { menuImage: this.currentImage })
        .then(() => {
          this.utiles.saveInLocaleStorage('user', this.user);
          console.log('Menú semanal guardado correctamente');
        })
        .catch((error) => {
          console.error('Error al guardar el menú semanal:', error);
        });
    }
  }
}
