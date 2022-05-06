import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TvaPipe } from './pipes/tva.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TvaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    TvaPipe,
    ReactiveFormsModule
  ]
}) export class SharedModule { }
