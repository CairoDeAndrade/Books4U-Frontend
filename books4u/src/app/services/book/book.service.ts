import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../model/book/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly API_BOOKS_BASE_URL = 'http://localhost:8080/book/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_BOOKS_BASE_URL);
  }

  createBook(book: any): Observable<any> {
    return this.http.post(this.API_BOOKS_BASE_URL, book);
  }
}
