import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredHover = 'none';

  constructor() { }

  ngOnInit(): void {
  }

  updateFeaturedHover(newTarget: string): void {
    this.featuredHover = newTarget;
  }

  isHoveringOn(target: string): boolean {
    return (this.featuredHover === target);
  }

}
