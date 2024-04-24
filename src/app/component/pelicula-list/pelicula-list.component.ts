import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { PeliculaItemComponent } from "../pelicula-item/pelicula-item.component";
import { Pelicula } from '../../models/pelicula';

@Component({
    selector: 'app-pelicula-list',
    standalone: true,
    templateUrl: './pelicula-list.component.html',
    styleUrl: './pelicula-list.component.css',
    imports: [NgFor, NgIf, PeliculaItemComponent]
})
export class PeliculaListComponent implements OnInit, OnDestroy{

    pelicula: Pelicula[] = [];
    peliculaSub: Subscription | undefined
    searchTerm: string = '';

    constructor(private peliculaService: PeliculasService, private searchService: SearchService) { }
   
      ngOnInit(): void {
        this.peliculaSub = this.peliculaService.getMovie().subscribe({
          next: (peliculas: any[]) => {
            this.pelicula = peliculas;
    
            if (this.searchTerm.trim() !== '') {
              this.search();
            }
          },
          error: (err: any) => {
            console.error(err);
          },
          complete: () => {
            console.log('completado');
            console.log(this.pelicula)
          }
        });
    
        this.searchService.currentResults.subscribe((results) => {
          this.pelicula = results;
        });
    
        // Realiza la búsqueda inicial al cargar la página
        this.search();
      }
    
      ngOnDestroy(): void {
        this.peliculaSub?.unsubscribe();
      }
 
     

      search() {
        const searchTermLower = this.searchTerm.toLowerCase();
      
  
        const searchResults = searchTermLower
          ? this.pelicula.filter((pelicula) => 
              pelicula.Title.toLowerCase().includes(searchTermLower) ||
              pelicula.category.some((category: string) => category.toLowerCase().includes(searchTermLower))
            )
          : this.pelicula;
      
        this.searchService.updateResults(searchResults);
      }
  
  
  
  


}
