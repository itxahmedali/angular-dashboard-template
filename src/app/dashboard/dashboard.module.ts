import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '../layout/layout.module';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule
  ]
})
export class DashboardModule { }
