import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { MonacoEditorModule, NgxMonacoEditorConfig } from "ngx-monaco-editor";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IconsModule } from "./icons/icons.module";
import { SingleProjectComponent } from './single-project/single-project.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleExperienceComponent } from './single-experience/single-experience.component';
import { CodeCompletionDemoComponent } from './code-completion-demo/code-completion-demo.component';

const fmt = (txt) => { return "hi" };

const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    let monacoInst = (<any>window).monaco;
    console.log(monacoInst.languages.getLanguages());
    monacoInst.languages.registerDocumentFormattingEditProvider('java', {
      provideDocumentFormattingEdits: (model: monaco.editor.ITextModel, options: monaco.languages.FormattingOptions, token: monaco.CancellationToken): monaco.languages.ProviderResult<monaco.languages.TextEdit[]> => {
        console.log(model.getValue());
        return [
          {
            range: model.getFullModelRange(),
            text: fmt(model.getValue())
          }
        ]
      }
    });
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    HomeComponent,
    SingleProjectComponent,
    NotFoundComponent,
    SingleExperienceComponent,
    CodeCompletionDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    IconsModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
