import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RegisterBookComponent } from "../../components/register-book/register-book.component";

@Component({
  selector: 'app-register-book-page',
  standalone: true,
  imports: [NavbarComponent, RegisterBookComponent],
  templateUrl: './register-book-page.component.html',
  styleUrl: './register-book-page.component.scss'
})
export class RegisterBookPageComponent {

}
