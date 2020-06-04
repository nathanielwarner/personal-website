import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-frontend';

  private isNavCollapsed: boolean = true;

  toggleNavCollapsed(): void {
    this.isNavCollapsed = !this.isNavCollapsed
  }

  getNavCollapsed(): boolean {
    return this.isNavCollapsed;
  }
}
