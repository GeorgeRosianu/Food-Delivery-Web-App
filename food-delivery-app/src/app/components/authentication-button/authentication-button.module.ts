import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AuthenticationButtonComponent } from '../authentication-button/authentication-button.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { SignupButtonComponent } from '../signup-button/signup-button.component';

@NgModule({
  declarations: [
    AuthenticationButtonComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent
  ]
})
export class AuthenticationButtonModule { }
