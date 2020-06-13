import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCompletionDemoComponent } from './code-completion-demo.component';

describe('CodeCompletionDemoComponent', () => {
  let component: CodeCompletionDemoComponent;
  let fixture: ComponentFixture<CodeCompletionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCompletionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCompletionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
