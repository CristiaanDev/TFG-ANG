import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AvisoComponent } from '../aviso/aviso.component';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../../services/api.service';
import { RecetasService } from '../../services/recetas.service';
import { NgFor } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-recetas',
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
  imports: [AvisoComponent, HeaderComponent, NgFor, FooterComponent],
})
export class RecetasComponent {
  datos: any = {};
  showModal: boolean = false;
  selectedProduct: any;
  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.getRecetas();
    this.getDatos();
  }

  getDatos() {
    const alimento = 'pizza'; // Nombre del alimento
    this.recetasService.getData(alimento).subscribe((data) => {
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
  /*public receta: any;
  data: any = {};
  codigo = '0180411000803'; // Código de ejemplo, puedes cambiarlo según tu necesidad

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.http
      .get(
        `https://world.openfoodfacts.net/api/v2/product/${this.codigo}?fields=product_name,nutriscore_data,nutriments,nutrition_grades`
      )
      .subscribe((resp: any) => {
        console.log(resp);
        this.receta = resp;
      });
  }*/
}
