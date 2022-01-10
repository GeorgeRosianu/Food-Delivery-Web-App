import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatIconModule } from '@angular/material/icon';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class TestModule { }
