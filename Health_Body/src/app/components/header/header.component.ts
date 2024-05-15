import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { AuthService } from '../../services/auth.service'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule, // Incluir CommonModule aquí
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  isMenuOpen = false;
  isLargeScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
  }

  ngOnInit() {
    this.isLargeScreen = window.innerWidth >= 768;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
