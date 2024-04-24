import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  /* Esto es temporal mientras se tiene la API */

  private comentarios: any[] = [
    {
      autor: 'Juan Pérez',
      contenido: 'Excelente pelicula, muy recomendable.'
    },
    {
      autor: 'María López',
      contenido: 'La trama se siente un poco predecible y carece de la profundidad emocional .'
    }
  ];

  getComentarios(): Observable<any[]> {
    /* Descomenta la siguiente línea cuando tengas una API real disponible */
    // return this.http.get<any[]>('api/comentarios');
    return of(this.comentarios);  // Usando 'of' para simular un Observable con los comentarios actuales
  }

  agregarComentario(comentario: any): Observable<any> {
    /* Descomenta la siguiente línea cuando tengas una API real disponible */
    // return this.http.post<any>('api/comentarios', comentario);
    this.comentarios.push(comentario);
    return of(comentario);  // Devolviendo el comentario añadido como un Observable
  }


}

