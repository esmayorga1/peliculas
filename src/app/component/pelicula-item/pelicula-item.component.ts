import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pelicula-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pelicula-item.component.html',
  styleUrl: './pelicula-item.component.css'
})
export class PeliculaItemComponent {
  @Input() pelicula: any

  ngOnInit(): void {
    console.log('ggggg')
    console.log(this.pelicula)
    
  }


}
