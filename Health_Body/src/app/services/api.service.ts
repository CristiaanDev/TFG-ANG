import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://world.openfoodfacts.net/api/v2/search';

  constructor(private http: HttpClient) {}

  public getData(alimento: string): Observable<any> {
    // Construir la URL con el nombre del alimento como parámetro
    const apiUrlWithParams = `${this.apiUrl}?categories_tags_es=${alimento}&fields=product_name,code,nutriments,image_nutrition_small_url,image_front_small_url`;
    return this.http.get<any>(apiUrlWithParams);
  }
}

/*getDatos(): Observable<any> {
    this.http.get(this.apiUrl).subscribe((resp: any) => {
      console.log(resp);
      this.datos = resp;
    });
  }*/

/*public getByCodeBar(nombre: string) {
    return this.http.get<any>(this.apiUrl);
  }

  buscarCodigo(code: string) {}

  public getRecetas() {
    return this.http.get(`${this.apiUrl}search.php?s=${this.ejemplo}`);
  }*/

/*llenarData() {
  this.http
    .get(
      `https://world.openfoodfacts.net/api/v2/product/${this.codigo}?fields=product_name,nutriscore_data,nutriments,nutrition_grades`
    )
    .subscribe((resp: any) => {
      console.log(resp);
      this.receta = resp;
    });
}*/
