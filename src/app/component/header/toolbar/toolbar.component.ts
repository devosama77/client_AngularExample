import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private router: Router) { }
  isStudentActive = false;
  isCourseActive = false;
  isDashboardActive = false;
  ngOnInit() {
  }

  onToggleSideNav() {
    this.toggleSidenav.emit();
  }

  onStudentTable() {
    this.router.navigate(['/students']);
    this.isStudentActive = true;
    this.isCourseActive = false;
    this.isDashboardActive = false;
  }
  onStudentTableAdmin() {
    this.router.navigate(['/student-edit']);
    this.isStudentActive = true;
    this.isCourseActive = false;
    this.isDashboardActive = false;
  }
  onDashboard() {
    this.router.navigate((['/']))
    this.isStudentActive = false;
    this.isCourseActive = false;
   this.isDashboardActive = true;
  }
  onCourseTable() {
    this.router.navigate(['/courses']);
    this.isStudentActive = false;
    this.isCourseActive = true;
    this.isDashboardActive = false;
  }
  onCourseEdit() {
    this.router.navigate(['/course-form']);
    this.isStudentActive = false;
    this.isCourseActive = true;
    this.isDashboardActive = false;
  }

  onAddStudent() {
    this.router.navigate(['/add-student-form']);
    this.isStudentActive = true;
    this.isCourseActive = false;
    this.isDashboardActive = false;
  }

}
