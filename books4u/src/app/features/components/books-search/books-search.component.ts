import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-books-search',
  standalone: true,
  imports: [MatIconModule, MatTableModule],
  templateUrl: './books-search.component.html',
  styleUrl: './books-search.component.scss'
})
export class BooksSearchComponent {
  books = [
    {
      title: 'Book Title 1',
      author: 'Author 1',
      actions: ['loan', 'edit', 'delete'],
    },
    {
      title: 'Book Title 2',
      author: 'Author 2',
      actions: ['loan', 'edit', 'delete'],
    },
    {
      title: 'Book Title 3',
      author: 'Author 3',
      actions: ['loan', 'edit', 'delete'],
    },
  ];

  displayedColumns: string[] = ['title', 'author', 'actions'];
}
