import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Restaurant1RoutingModule } from './restaurant1-routing.module';
import { Restaurant1Component } from './restaurant1.component';
import { ToolbarModule } from '../toolbar/toolbar.module';

@NgModule({
  declarations: [
    Restaurant1Component
  ],
  imports: [
    CommonModule,
    Restaurant1RoutingModule,
    ToolbarModule
  ]
})
export class Restaurant1Module { }
