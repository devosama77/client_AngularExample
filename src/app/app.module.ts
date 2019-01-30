import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ToolbarComponent } from './component/header/toolbar/toolbar.component';
import {MaterialModule} from './material.module';
import { SideNavComponent } from './component/header/side-nav/side-nav.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/auth/login/login.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { PageNotFoundComponent } from './pages/auth/page-not-found/page-not-found.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import {HttpClientModule} from '@angular/common/http';
import { StudentsModule } from './pages/students/students.module';
import {CoursesModule} from './pages/courses/courses.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideNavComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    StudentsModule,
    CoursesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
