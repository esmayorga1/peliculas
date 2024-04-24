import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { ComentariosComponent } from "../comentarios/comentarios.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-pelicula',
    standalone: true,
    templateUrl: './pelicula.component.html',
    styleUrl: './pelicula.component.css',
    imports: [ComentariosComponent, NgFor]
})
export class PeliculaComponent implements OnInit, OnDestroy {
  id: string | undefined

  pelicula: Pelicula | undefined;
  peliculaSub: Subscription | undefined


  galeria: Array<any> = []
  renderGaleria: Boolean = true

  currentImg: string | undefined



  constructor(private route: ActivatedRoute, private peliculaService: PeliculasService) { }

  ngOnInit(): void {
    // console.log(this.route)

    this.id = this.route.snapshot.params['id']

    this.peliculaSub = this.peliculaService.getMovie().subscribe({
      next: (pelicula: Pelicula[]) => {

        this.pelicula = pelicula.filter(p => p.imdbID === this.id)[0]
        this.currentImg = this.pelicula.Poster
      },
      error: (err: any) => {
        console.error(err)
      }

    })

  }

  cambioImg(itemImg: string){
    this.currentImg = itemImg
  }

  ngOnDestroy(): void {
    this.peliculaSub?.unsubscribe();
    
}


}
