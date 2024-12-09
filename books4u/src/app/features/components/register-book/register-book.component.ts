import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

import { BookService } from '../../../services/book/book.service';
import { APP_BASE_ROUTES } from './../../../common/routes/routes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-book',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-book.component.html',
  styleUrls: ['./register-book.component.scss'],
})
export class RegisterBookComponent {
  bookForm: FormGroup;

  APP_BASE_ROUTES = APP_BASE_ROUTES;

  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private bookService: BookService,
    private snackBar: MatSnackBar
  ) {
    this.bookForm = this.fb.group({
      title: [null, [Validators.required]],
      CDD: [null, [Validators.required]],
      CDU: [null],
      CUTER: [null],
      copy: [1, [Validators.required, Validators.min(1)]],
      genresId: [[], [Validators.required]],
      publisherId: [null, [Validators.required]],
      bookLocalizationId: [null, [Validators.required]],
      authorsIds: [[], [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value).subscribe({
        next: () => {
          this.snackBar.open('Livro cadastrado com sucesso!', 'Fechar', {
            duration: 3000,
          });
          this.router.navigate([APP_BASE_ROUTES.BOOKS_SEARCH]);
        },
        error: (err) => {
          console.error(err);
          this.snackBar.open('Erro ao cadastrar o livro.', 'Fechar', {
            duration: 3000,
          });
        },
      });
    } else {
      this.snackBar.open('Preencha todos os campos obrigatórios.', 'Fechar', {
        duration: 3000,
      });
    }
  }
}
