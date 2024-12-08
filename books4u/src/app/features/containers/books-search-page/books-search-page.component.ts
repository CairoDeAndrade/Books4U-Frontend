import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BooksSearchComponent } from "../../components/books-search/books-search.component";

@Component({
  selector: 'app-books-search-page',
  standalone: true,
  imports: [NavbarComponent, BooksSearchComponent],
  templateUrl: './books-search-page.component.html',
  styleUrl: './books-search-page.component.scss'
})
export class BooksSearchPageComponent {

}
