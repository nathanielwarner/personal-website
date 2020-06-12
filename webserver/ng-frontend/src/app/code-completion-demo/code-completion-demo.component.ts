import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-completion-demo',
  templateUrl: './code-completion-demo.component.html',
  styleUrls: ['./code-completion-demo.component.scss']
})
export class CodeCompletionDemoComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'java', automaticLayout: true};
  code: string = 'public void openFile(String filename)';

  constructor() { }

  ngOnInit(): void {
  }

}
