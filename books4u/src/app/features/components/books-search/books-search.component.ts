import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { Book } from '../../../model/book/Book';
import { BookService } from '../../../services/book/book.service';

@Component({
  selector: 'app-books-search',
  standalone: true,
  imports: [MatIconModule, MatTableModule],
  templateUrl: './books-search.component.html',
  styleUrl: './books-search.component.scss',
})
export class BooksSearchComponent {
  books: Book[] = [];
  displayedColumns: string[] = [
    'title',
    'publisher',
    'bookcase',
    'shelf',
    'authors',
    'actions',
  ];

  constructor(
    private bookService: BookService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data: Book[]) => {
        this.books = data;
      },
      error: () => {
        this.snackBar.open('Erro ao carregar os livros!', '', {
          duration: 7000,
        });
      },
    });
  }

  getAuthors(authors: any[]): string {
    return authors.map((author) => author.name).join(', ');
  }
}
