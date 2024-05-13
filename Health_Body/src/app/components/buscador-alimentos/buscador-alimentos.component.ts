import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AvisoComponent } from '../aviso/aviso.component';
import { ApiService } from '../../services/api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-buscador-alimentos',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterLink,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    AvisoComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './buscador-alimentos.component.html',
  styleUrl: './buscador-alimentos.component.scss',
})
export class BuscadorAlimentosComponent {
  datos: any = {};
  showModal: boolean = false;
  selectedProduct: any;
  constructor(private apiService: ApiService) {}
  alimento: string = '';
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

  // Método para ocultar el modal
  hidePopup() {
    this.showModal = false;
  }
}
