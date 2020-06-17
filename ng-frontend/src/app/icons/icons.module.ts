import { NgModule } from '@angular/core';
import { FeatherModule } from "angular-feather";
import { Github, Linkedin, AlertTriangle, ExternalLink } from "angular-feather/icons";

const icons = {
  Github, Linkedin, AlertTriangle, ExternalLink
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
