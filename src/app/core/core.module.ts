import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ],
  exports: [
    UiModule,
    IconsModule,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SharedModule
  ]
}) export class CoreModule { }
