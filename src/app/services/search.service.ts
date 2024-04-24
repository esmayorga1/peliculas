import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeliculasService } from './peliculas.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchResults = new BehaviorSubject<any[]>([]);
  currentResults = this.searchResults.asObservable();

  constructor(private peliculaService: PeliculasService) {
    this.peliculaService.getMovie().subscribe(peliculas => {
      this.searchResults.next(peliculas);
    });
   }

  updateResults(results: any[]) {
    this.searchResults.next(results);
  }

  filterByCategory(category: string) {
    this.peliculaService.getMovie().subscribe(peliculas => {
      const filteredResults = peliculas.filter(pelicula =>
        pelicula.category.includes(category)
      );
      this.updateResults(filteredResults);
    });
  }

}