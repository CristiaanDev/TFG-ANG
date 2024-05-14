import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { PanelPrincipalComponent } from '../panel-principal/panel-principal.component';
import { BuscadorAlimentosComponent } from '../buscador-alimentos/buscador-alimentos.component'; // Importa el AuthService

@Component({
  selector: 'app-cuenta',
  standalone: true,
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.scss',
  providers: [AuthService],
  imports: [PanelPrincipalComponent, RouterLink, BuscadorAlimentosComponent],
})
export class CuentaComponent {
  datos: any = {};
  showModal: boolean = false;
  selectedProduct: any;
  alimento: string = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthService, // Inyecta el AuthService
    private router: Router // Inyecta el Router
  ) {}

  onSubmit() {
    this.getDatos(this.alimento);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.getRecetas();
    //this.getDatos();
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

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/login'); // Redirige a la página de inicio después del logout
    });
  }
}
