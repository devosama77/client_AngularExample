import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './pages/auth/page-not-found/page-not-found.component';
import {LoginComponent} from './pages/auth/login/login.component';

import {LogoutComponent} from './pages/auth/logout/logout.component';

const routes: Routes = [
  // Important: The sequence of path is important as the router go over then in sequential manner
  { path: '', redirectTo: 'dashboard/students', pathMatch: 'full' },
  {path : 'students' , redirectTo : '/students'},
   {path : 'login' , component: LoginComponent},
   {path : 'logout' , component: LogoutComponent},
     {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
