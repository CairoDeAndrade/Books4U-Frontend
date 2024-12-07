import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { MainMenuComponent } from "../../components/main-menu/main-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MainMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
