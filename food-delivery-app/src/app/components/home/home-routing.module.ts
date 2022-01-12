import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { BrowseComponent } from '../browse/browse.component';
import { LoginComponent } from '../login/login.component';
import { Restaurant1Component } from '../restaurant1/restaurant1.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "browse", component: BrowseComponent, canActivate:[AuthGuard] },
  { path: "bakery85c", component: Restaurant1Component, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
