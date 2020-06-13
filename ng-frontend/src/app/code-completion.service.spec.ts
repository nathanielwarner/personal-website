import { TestBed } from '@angular/core/testing';

import { CodeCompletionService } from './code-completion.service';

describe('CodeCompletionService', () => {
  let service: CodeCompletionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeCompletionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
