import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-books-search',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './books-search.component.html',
  styleUrl: './books-search.component.scss'
})
export class BooksSearchComponent {

}
