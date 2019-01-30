import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {DashCoursesComponent} from './dash-courses/dash-courses.component';
import {DashStudentsComponent} from './dash-students/dash-students.component';
import {MaterialModule} from '../../material.module';
import {FlexModule} from '@angular/flex-layout';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    DashStudentsComponent,
    DashCoursesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FlexModule,
    ChartsModule
  ]
})
export class DashboardModule { }
