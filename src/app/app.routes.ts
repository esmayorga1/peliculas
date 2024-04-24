import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PeliculaComponent } from './component/pelicula/pelicula.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pelicula/:id', component: PeliculaComponent }
];
