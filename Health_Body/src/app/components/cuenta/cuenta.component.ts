import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { PanelPrincipalComponent } from '../panel-principal/panel-principal.component';
import { BuscadorAlimentosComponent } from '../buscador-alimentos/buscador-alimentos.component';
import { MenuSemanalComponent } from '../menu-semanal/menu-semanal.component'; // Importa el AuthService
import { NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { UtilesService } from '../../services/utiles.service';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss',
  providers: [AuthService],
  imports: [
    PanelPrincipalComponent,
    RouterLink,
    BuscadorAlimentosComponent,
    MenuSemanalComponent,
    NgSwitch,
    NgSwitchCase,
    NgClass,
    FooterComponent,
  ],
})
export class CuentaComponent {
  datos: any = {};
  showModal: boolean = false;
  selectedProduct: any;
  alimento: string = '';
  router = inject(Router);
  authService = inject(AuthService);
  utiles = inject(UtilesService);

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.getDatos(this.alimento);
  }

  getDatos(alimento: string) {
    // Nombre del alimento
    this.apiService.getData(alimento).subscribe((data) => {
      this.datos = data;
      console.log(this.datos);
    });
  }

  showPopup(producto: any) {
    this.selectedProduct = producto;
    this.showModal = true;
  }

  hidePopup() {
    this.showModal = false;
  }

  activeComponent: string = 'panel-principal';
  isMenuOpen: boolean = false;
  isLargeScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isLargeScreen = event.target.innerWidth >= 768;
    if (this.isLargeScreen) {
      this.isMenuOpen = true;
    }
  }

  ngOnInit() {
    /*           APARTADO DE NAV LATERAL       */
    /*           APARTADO DE NAV LATERAL       */
    /*           APARTADO DE NAV LATERAL       */

    this.isLargeScreen = window.innerWidth >= 768;
    this.isMenuOpen = this.isLargeScreen;

    /*           APARTADO DE NAV LATERAL       */
    /*           APARTADO DE NAV LATERAL       */
    /*           APARTADO DE NAV LATERAL       */
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveComponent(component: string) {
    this.activeComponent = component;
  }

  logOut() {
    this.authService.signOut();
  }
}
