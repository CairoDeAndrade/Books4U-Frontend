import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../../model/loan/loan';
import { LoanRequest } from '../../model/loan/loan-request';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  private readonly API_LOANS_BASE_URL = 'http://localhost:8080/loan/';

  constructor(private http: HttpClient) {}

  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.API_LOANS_BASE_URL);
  }

  getLoansByDateRange(startDate: Date, endDate: Date): Observable<Loan[]> {
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];
    return this.http.get<Loan[]>(
      `${this.API_LOANS_BASE_URL}startDate/${formattedStartDate}/endDate/${formattedEndDate}`
    );
  }

  returnLoan(id: number): Observable<any> {
    return this.http.patch(`${this.API_LOANS_BASE_URL}return/${id}`, {});
  }

  createLoan(request: LoanRequest): Observable<any> {
    return this.http.post(this.API_LOANS_BASE_URL, request);
  }
}
