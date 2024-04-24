import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private searchService: SearchService) {}
  filterByCategory(category: string) {
    this.searchService.filterByCategory(category);
  }


}
