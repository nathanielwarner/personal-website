import { Component, OnInit } from '@angular/core';

import { CodeCompletionService } from '../code-completion.service';

export enum ProcessingStatus {
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

  editorOptions = {theme: 'vs-dark', language: 'java'};
  code = 'public void openFile(String filename)';
  summarization: null | string = null;
  processingStatusEnum = ProcessingStatus;
  processingStatus: ProcessingStatus = ProcessingStatus.None;
  formatDocument: any = null;

  constructor(private codeCompletionService: CodeCompletionService) { }

  ngOnInit(): void {}

  onEditorInit(editor: any): void {
    this.formatDocument = editor._actions["editor.action.formatDocument"];
  }

  complete(): void {
    this.processingStatus = ProcessingStatus.InProgress;
    this.codeCompletionService.getCompletion(this.code).subscribe((response => {
      console.log(response);
      this.code += response.completion;
      this.processingStatus = ProcessingStatus.Succeeded;
    }), err => {
      console.log(err);
      this.processingStatus = ProcessingStatus.Failed;
    });
    this.formatDocument.run();
  }

  summarize(): void {
    this.processingStatus = ProcessingStatus.InProgress;
    this.codeCompletionService.getSummarization(this.code).subscribe((response => {
      console.log(response);
      this.summarization = response.summarization;
      this.processingStatus = ProcessingStatus.Succeeded;
    }), err => {
      console.log(err);
      this.processingStatus = ProcessingStatus.Failed;
    });
  }

}
