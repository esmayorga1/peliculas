import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { PeliculasService } from '../../services/peliculas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  searchTerm: string = '';
  constructor(private searchService: SearchService, private peliculaService: PeliculasService) { }

  search(query: string) {
    this.peliculaService.getMovie().subscribe(peliculas => {
      const searchTermLower = query.toLowerCase();

     
      const searchResults = searchTermLower
        ? peliculas.filter(pelicula =>
            pelicula.Title.toLowerCase().includes(searchTermLower) 
            // ||
            // pelicula.category.some(category => category.toLowerCase().includes(searchTermLower))
          )
        : peliculas;
      
        console.log(peliculas)

      this.searchService.updateResults(searchResults);
    });
  }


}



