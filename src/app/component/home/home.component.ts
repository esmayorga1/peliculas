import { Component } from '@angular/core';
import { BuscadorComponent } from "../buscador/buscador.component";
import { PeliculaListComponent } from "../pelicula-list/pelicula-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BuscadorComponent, PeliculaListComponent]
})
export class HomeComponent {

}
