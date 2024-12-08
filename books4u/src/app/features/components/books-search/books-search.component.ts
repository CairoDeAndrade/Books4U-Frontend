import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../model/book/Book';
import { APP_BASE_ROUTES } from '../../../common/routes/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-search',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './books-search.component.html',
  styleUrl: './books-search.component.scss',
})
export class BooksSearchComponent {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchQuery: string = '';

  displayedColumns: string[] = [
    'title',
    'publisher',
    'bookcase',
    'shelf',
    'authors',
    'actions',
  ];

  APP_BASE_ROUTES = APP_BASE_ROUTES;

  constructor(
    private bookService: BookService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data: Book[]) => {
        this.books = data;
        this.filteredBooks = [...this.books];
      },
      error: () => {
        this.snackBar.open('Error loading books!', '', {
          duration: 7000,
        });
      },
    });
  }

  filterBooks(): void {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredBooks = this.books.filter((book) =>
      book.title.toLowerCase().includes(query)
    );
  }

  getAuthors(authors: any[]): string {
    return authors.map((author) => author.name).join(', ');
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
