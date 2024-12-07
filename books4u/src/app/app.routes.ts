import { Routes } from '@angular/router';

import { BooksSearchComponent } from './features/containers/books-search/books-search.component';
import { HomeComponent } from './features/containers/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-book', component: BooksSearchComponent},
  { path: 'books-search', component: BooksSearchComponent},
  { path: 'loans', component: BooksSearchComponent},
  { path: '**', redirectTo: '' },
];
