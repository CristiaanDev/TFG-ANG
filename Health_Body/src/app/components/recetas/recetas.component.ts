import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AvisoComponent } from '../aviso/aviso.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-recetas',
  standalone: true,
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
  imports: [AvisoComponent, HeaderComponent],
})
export class RecetasComponent {
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
