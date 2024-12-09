import { Routes } from '@angular/router';

import { HomeComponent } from './features/containers/home/home.component';
import { BooksSearchPageComponent } from './features/containers/books-search-page/books-search-page.component';
import { LoanPageComponent } from './features/containers/loan-page/loan-page.component';
import { RegisterLoanPageComponent } from './features/containers/register-loan-page/register-loan-page.component';
import { RegisterBookPageComponent } from './features/containers/register-book-page/register-book-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-book', component: RegisterBookPageComponent},
  { path: 'books-search', component: BooksSearchPageComponent},
  { path: 'loans', component: LoanPageComponent},
  { path: 'loans/register', component: RegisterLoanPageComponent},
  { path: '**', redirectTo: '' },
];
