import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { LoanComponent } from "../../components/loan/loan.component";

@Component({
  selector: 'app-loan-page',
  standalone: true,
  imports: [NavbarComponent, LoanComponent],
  templateUrl: './loan-page.component.html',
  styleUrl: './loan-page.component.scss'
})
export class LoanPageComponent {

}
