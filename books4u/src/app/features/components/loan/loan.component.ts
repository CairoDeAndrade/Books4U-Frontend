import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

import { Loan } from '../../../model/loan/loan';
import { LoanService } from '../../../services/loan/loan.service';
import { APP_BASE_ROUTES } from './../../../common/routes/routes';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.scss',
})
export class LoanComponent {
  loans: Loan[] = [];
  displayedColumns: string[] = [
    'startDate',
    'endDate',
    'deliveredDate',
    'tax',
    'student',
    'books',
    'actions',
  ];
  startDate?: Date;
  endDate?: Date;

  APP_BASE_ROUTES = APP_BASE_ROUTES;

  constructor(
    private loanService: LoanService,
    private snackBar: MatSnackBar,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.fetchLoans();
  }

  fetchLoans(): void {
    this.loanService.getLoans().subscribe({
      next: (data: Loan[]) => {
        this.loans = data;
      },
      error: () => {
        this.snackBar.open('Erro ao carregar os empréstimos!', '', {
          duration: 7000,
        });
      },
    });
  }

  getBookTitles(books: any[]): string {
    return books.map((book) => book.title).join(', ');
  }

  filterLoans(): void {
    if (this.startDate && this.endDate) {
      this.loanService
        .getLoansByDateRange(this.startDate, this.endDate)
        .subscribe({
          next: (data: Loan[]) => {
            this.loans = data;
          },
          error: () => {
            this.snackBar.open('Erro ao carregar os empréstimos!', '', {
              duration: 7000,
            });
          },
        });
    }
  }

  returnLoan(id: number): void {
    this.loanService.returnLoan(id).subscribe({
      next: () => {
        this.snackBar.open('Livro devolvido com sucesso!', '', {
          duration: 5000,
        });
        this.fetchLoans();
      },
      error: () => {
        this.snackBar.open('Erro ao devolver o livro!', '', {
          duration: 3000,
        });
      },
    });
  }
}
