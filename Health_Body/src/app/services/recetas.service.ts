import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';

  constructor(private http: HttpClient) {}

  public getData(alimento: string): Observable<any> {
    // Construir la URL con el nombre del alimento como parámetro
    const apiUrlWithParams = `${this.apiUrl}?s=${alimento}`;
    return this.http.get<any>(apiUrlWithParams);
  }
}
