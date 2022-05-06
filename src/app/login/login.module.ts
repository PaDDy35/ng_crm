import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageResetPasswordComponent } from './page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './page-sign-in/page-sign-in.component';


@NgModule({
  declarations: [
    PageForgotPasswordComponent,
    PageRegisterComponent,
    PageResetPasswordComponent,
    PageSignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
}) export class LoginModule { }
