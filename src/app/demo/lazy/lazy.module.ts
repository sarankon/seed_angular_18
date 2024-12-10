import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { SubModule } from './sub/sub.module';


@NgModule({
  declarations: [
    LazyComponent,
  ],
  imports: [
    CommonModule,
    SubModule,
    LazyRoutingModule
  ],
  exports: [
  ]
})
export class LazyModule { }
