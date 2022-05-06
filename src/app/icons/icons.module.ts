import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconSignInComponent } from './components/icon-sign-in/icon-sign-in.component';
import { IconSignOutComponent } from './components/icon-sign-out/icon-sign-out.component';
import { IconAddComponent } from './components/icon-add/icon-add.component';



@NgModule({
  declarations: [
    IconNavComponent,
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconSignInComponent,
    IconSignOutComponent,
    IconAddComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconNavComponent,
    IconCloseComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconSignInComponent,
    IconSignOutComponent,
    IconAddComponent
  ]
}) export class IconsModule { }
