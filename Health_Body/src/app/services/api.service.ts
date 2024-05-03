import { HttpParams, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Meal {
  meal: any;
}

export interface Recipes {
  meals: any;
}
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private codigo = '0180411000803';
  private datos: any;
  // url api por defecto
  private apiUrl = `https://world.openfoodfacts.net/api/v2/product/${this.codigo}?fields=product_name,nutriscore_data,nutriments,nutrition_grades`;

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
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
}

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
