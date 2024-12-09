import { LoanService } from './../../../services/loan/loan.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
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

import { Book } from '../../../model/book/Book';
import { Student } from '../../../model/student/student';
import { BookService } from '../../../services/book/book.service';
import { APP_BASE_ROUTES } from './../../../common/routes/routes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from '../../../services/student/student.service';
import { LoanRequest } from '../../../model/loan/loan-request';

@Component({
  selector: 'app-register-loan',
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
  templateUrl: './register-loan.component.html',
  styleUrl: './register-loan.component.scss',
})
export class RegisterLoanComponent {
  loanForm: FormGroup;
  books: Book[] = [];
  students: Student[] = [];

  APP_BASE_ROUTES = APP_BASE_ROUTES;

  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private bookService: BookService,
    private studentService: StudentService,
    private loanService: LoanService,
    private snackBar: MatSnackBar,
  ) {
    this.loanForm = this.fb.group({
      book: [null],
      student: [null],
      startDate: [new Date()],
      endDate: [this.addDays(new Date(), 7)],
    });
  }

  ngOnInit(): void {
    this.fetchBooks();
    this.fetchStudents();
  }

  addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data: Book[]) => {
        this.books = data;
      },
      error: () => {
        this.snackBar.open('Erro ao carregar livros!', '', {
          duration: 5000,
        });
      },
    });
  }

  fetchStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
      },
      error: () => {
        this.snackBar.open('Erro ao carregar alunos!', '', {
          duration: 5000,
        });
      },
    });
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      const request: LoanRequest = {
        startDate: this.loanForm.value.startDate,
        endDate: this.loanForm.value.endDate,
        booksId: [this.loanForm.value.book],
        studentId: this.loanForm.value.student,
      };

      this.loanService.createLoan(request).subscribe({
        next: () => {
          this.snackBar.open('Empréstimo registrado com sucesso!', '', {
            duration: 5000,
          });
          this.router.navigate([APP_BASE_ROUTES.LOANS]);
        },
        error: () => {
          this.snackBar.open('Erro ao registrar empréstimo. Tente novamente.', '', {
            duration: 5000,
          });
        },
      });
    } else {
      this.snackBar.open('Por favor, preencha todos os campos antes de salvar.', '', {
        duration: 5000,
      });    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
