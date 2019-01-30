import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import {StudentsComponent} from './students.component';
import {MaterialModule} from '../../material.module';
import { PersonalDetailesComponent } from './personal-detailes/personal-detailes.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { StudentContainerComponent } from './student-container/student-container.component';
import { AllDetailsComponent } from './all-details/all-details.component';
import { AddStudentComponent } from './forms/add-student/add-student.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [StudentsComponent, PersonalDetailesComponent,
    StudentContainerComponent, AllDetailsComponent, AddStudentComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule

  ]
})
export class StudentsModule { }
