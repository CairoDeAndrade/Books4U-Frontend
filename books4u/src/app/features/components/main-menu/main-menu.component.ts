import { APP_BASE_ROUTES } from './../../../common/routes/routes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  constructor(private router: Router) {}

  APP_BASE_ROUTES = APP_BASE_ROUTES;

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
