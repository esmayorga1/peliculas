import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiServe } from '../apiServe';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private ApiUrl: string = apiServe.serveUrl
 
 

  constructor(private http: HttpClient) { }

   // Sistema de administración para incorporar los datos base para la consulta

   getMovie(): Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(`${this.ApiUrl}`);
  }

  getMovieId(productId: string): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.ApiUrl}/products${productId}`);
    
  }
 
 
  
}
