import {
  Component,
  HostListener,
  inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { PanelPrincipalComponent } from '../panel-principal/panel-principal.component';
import { BuscadorAlimentosComponent } from '../buscador-alimentos/buscador-alimentos.component';
import { MenuSemanalComponent } from '../menu-semanal/menu-semanal.component';
import { NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { UtilesService } from '../../services/utiles.service';
import { MatDialog } from '@angular/material/dialog';
import { CompletarUsuarioComponent } from '../completar-usuario/completar-usuario.component';
import { Subscription } from 'rxjs';
import { User as FirebaseUser } from '@angular/fire/auth';
import { User } from '../../user.interface';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
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
export class CuentaComponent implements OnInit, OnDestroy {
  datos: any = {};
  showModal: boolean = false;
  selectedProduct: any;
  alimento: string = '';
  router = inject(Router);
  authService = inject(AuthService);
  utiles = inject(UtilesService);
  dialog = inject(MatDialog);

  private userSubscription!: Subscription;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.getDatos(this.alimento);
  }

  getDatos(alimento: string) {
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
    this.isLargeScreen = window.innerWidth >= 768;
    this.isMenuOpen = this.isLargeScreen;

    this.userSubscription = this.authService.currentUser$.subscribe(
      (user: FirebaseUser | null) => {
        if (!user) {
          this.utiles.routerLink('/login');
        } else {
          this.authService
            .getUserData(user.uid)
            .then((userData: User | undefined) => {
              const storedUser = { ...userData, id: user.uid };
              this.utiles.saveInLocaleStorage('user', storedUser);
              if (
                !storedUser.age ||
                !storedUser.weight ||
                !storedUser.height ||
                !storedUser.gender ||
                !storedUser.activityLevel ||
                !storedUser.goal
              ) {
                const dialogRef = this.dialog.open(CompletarUsuarioComponent, {
                  data: { user: storedUser },
                  disableClose: true,
                });

                dialogRef.afterClosed().subscribe((updatedUser: User) => {
                  if (updatedUser) {
                    this.utiles.saveInLocaleStorage('user', updatedUser);
                  }
                });
              }
            });
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
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
