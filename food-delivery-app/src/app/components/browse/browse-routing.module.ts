import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from '../home/home.component';
import { Restaurant1Component } from '../restaurant1/restaurant1.component';
import { BrowseComponent } from './browse.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "browse", component: BrowseComponent, canActivate:[AuthGuard] },
  { path: "bakery85c", component: Restaurant1Component, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
