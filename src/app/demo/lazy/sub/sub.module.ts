import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub.component';


@NgModule({
  declarations: [
    SubComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubComponent
  ]
})
export class SubModule { }
