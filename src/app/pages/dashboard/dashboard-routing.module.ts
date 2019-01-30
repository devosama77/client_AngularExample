import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashStudentsComponent} from './dash-students/dash-students.component';
import {DashCoursesComponent} from './dash-courses/dash-courses.component';
import {AuthGuard} from '../../services/auth.guard';

const routes: Routes = [
  { path : '' , redirectTo: 'dashboard/students', pathMatch: 'full'},
  {
    path     : 'dashboard',
    component: DashboardComponent,
    data     : [{selectedHeaderItemIndex: 0, selectedSubNavItemIndex: -1}],
    canActivate: [AuthGuard]
    ,
    children : [
      { path: '' , redirectTo: '/students', pathMatch: 'full'},
      { path: 'students'   , component:   DashStudentsComponent   , data: [{selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 0}]  },
      { path: 'courses' , component: DashCoursesComponent   , data: [{selectedHeaderItemIndex: 0, selectedSubNavItemIndex: 1}]  }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
