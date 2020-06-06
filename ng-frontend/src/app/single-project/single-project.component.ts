import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() tryUrl: string;
  @Input() githubUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
