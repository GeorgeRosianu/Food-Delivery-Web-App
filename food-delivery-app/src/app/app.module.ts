import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './components/home/home.module';
import { BrowseModule } from './components/browse/browse.module';
import { LoginModule } from './components/login/login.module';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { Restaurant1Module } from './components/restaurant1/restaurant1.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    BrowseModule,
    Restaurant1Module,
    AuthModule.forRoot({
      ...env.auth,
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
