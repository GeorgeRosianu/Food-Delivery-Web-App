import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Restaurant1RoutingModule } from './restaurant1-routing.module';
import { Restaurant1Component } from './restaurant1.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    Restaurant1Component
  ],
  imports: [
    CommonModule,
    Restaurant1RoutingModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    ToolbarModule
  ]
})
export class Restaurant1Module { }
