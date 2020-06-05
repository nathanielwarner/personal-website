import { NgModule } from '@angular/core';
import { FeatherModule } from "angular-feather";
import { Github, Linkedin } from "angular-feather/icons";

const icons = {
  Github, Linkedin
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
