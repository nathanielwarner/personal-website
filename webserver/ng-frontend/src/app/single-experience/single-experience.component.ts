import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-experience',
  templateUrl: './single-experience.component.html',
  styleUrls: ['./single-experience.component.scss']
})
export class SingleExperienceComponent implements OnInit {
  @Input() orgName: string;
  @Input() orgLink: string;
  @Input() position: string;
  @Input() startDate: string;
  @Input() endDate: string;

  constructor() { }

  ngOnInit(): void {
  }

}
