import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from './students.component';
import {AddStudentComponent} from './forms/add-student/add-student.component';

const routes: Routes = [
  {path : 'students' , component: StudentsComponent},
  {path : 'add-student-form' , component : AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
