import { Component, OnInit } from '@angular/core';

import { CodeCompletionService } from "../code-completion.service";

export enum CodeCompletionStatus {
  None,
  InProgress,
  Failed,
  Succeeded
}

@Component({
  selector: 'app-code-completion-demo',
  templateUrl: './code-completion-demo.component.html',
  styleUrls: ['./code-completion-demo.component.scss']
})
export class CodeCompletionDemoComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'java', automaticLayout: true};
  code: string = 'public void openFile(String filename)';
  codeComplStatType = CodeCompletionStatus;
  codeCompletionStatus: CodeCompletionStatus = CodeCompletionStatus.None;

  constructor(private codeCompletionService: CodeCompletionService) { }

  ngOnInit(): void {}

  complete(): void {
    this.codeCompletionStatus = CodeCompletionStatus.InProgress;
    this.codeCompletionService.getCompletion(this.code).subscribe((response => {
      console.log(response);
      this.code += response.completion;
      this.codeCompletionStatus = CodeCompletionStatus.Succeeded;
    }), err => {
      console.log(err);
      this.codeCompletionStatus = CodeCompletionStatus.Failed;
    })
  }

}
