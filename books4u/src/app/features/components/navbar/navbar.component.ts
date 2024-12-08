import { APP_BASE_ROUTES } from './../../../common/routes/routes';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(protected router: Router) {}

  APP_BASE_ROUTES = APP_BASE_ROUTES;

  // navigateTo(path: string): void {
  //   this.router.navigate([path]);
  // }
}
