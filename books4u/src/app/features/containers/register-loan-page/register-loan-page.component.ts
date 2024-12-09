import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RegisterLoanComponent } from "../../components/register-loan/register-loan.component";

@Component({
  selector: 'app-register-loan-page',
  standalone: true,
  imports: [NavbarComponent, RegisterLoanComponent],
  templateUrl: './register-loan-page.component.html',
  styleUrl: './register-loan-page.component.scss'
})
export class RegisterLoanPageComponent {

}
