import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { MonacoEditorModule } from "ngx-monaco-editor";

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
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
