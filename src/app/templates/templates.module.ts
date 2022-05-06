import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatePageComponent } from './components/template-page/template-page.component';



@NgModule({
  declarations: [
    TemplatePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatePageComponent
  ]
}) export class TemplatesModule { }
