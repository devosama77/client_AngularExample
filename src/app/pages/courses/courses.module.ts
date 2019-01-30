import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import {CoursesComponent} from './courses.component';
import {MaterialModule} from '../../material.module';
import { CourseContainerComponent } from './course-container/course-container.component';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseContainerComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    FlexModule
  ]
})
export class CoursesModule { }
