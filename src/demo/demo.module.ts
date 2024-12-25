import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DashboardNormalComponent } from './dashboard-normal/dashboard-normal.component';
import { ApiModule } from '../api/api.module';


@NgModule({
  declarations: [
    DashboardNormalComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ApiModule
  ]
})
export class DemoModule { }
