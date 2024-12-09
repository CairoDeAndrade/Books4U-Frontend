import { APP_BASE_ROUTES } from './../../../common/routes/routes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

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
  books = [
    { id: 1, title: 'Livro A' },
    { id: 2, title: 'Livro B' },
    { id: 3, title: 'Livro C' },
  ];
  students = [
    { id: 1, name: 'Estudante 1' },
    { id: 2, name: 'Estudante 2' },
    { id: 3, name: 'Estudante 3' },
  ];

  APP_BASE_ROUTES = APP_BASE_ROUTES;

  constructor(private fb: FormBuilder, protected router: Router) {
    this.loanForm = this.fb.group({
      book: [null],
      student: [null],
      startDate: [new Date()],
      endDate: [this.addDays(new Date(), 7)],
    });
  }

  ngOnInit(): void {}

  addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      console.log('Formulário enviado:', this.loanForm.value);
    } else {
      console.log('Formulário inválido.');
    }
  }
}
