import { NgModule } from '@angular/core';
import { FeatherModule } from "angular-feather";
import { Github, Linkedin, AlertTriangle } from "angular-feather/icons";

const icons = {
  Github, Linkedin, AlertTriangle
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
