import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExperienceComponent } from './single-experience.component';

describe('SingleExperienceComponent', () => {
  let component: SingleExperienceComponent;
  let fixture: ComponentFixture<SingleExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
