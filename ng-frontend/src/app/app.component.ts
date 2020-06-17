import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-frontend';

  private isNavCollapsed: boolean = true;

  constructor(private router: Router) {}

  toggleNavCollapsed(): void {
    this.isNavCollapsed = !this.isNavCollapsed
  }

  getNavCollapsed(): boolean {
    return this.isNavCollapsed;
  }

  getCurrentRouteUrl(): string {
    return this.router.url;
  }
}
