import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  teacherName: string;
  dateRegister: Date;
  notice: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Math', teacherName: 'Osama M.M Almadhoun', dateRegister : new Date(),
  notice: '24 pages (book)'},
  {position: 2, name: 'Math', teacherName: 'Osama M.M Almadhoun', dateRegister : new Date(),
    notice: '24 pages (book)'},
  {position: 3, name: 'Math', teacherName: 'Osama M.M Almadhoun', dateRegister : new Date(),
    notice: '24 pages (book)'},
  {position: 4, name: 'Math', teacherName: 'Osama M.M Almadhoun', dateRegister: new Date(),
    notice: '24 pages (book)'}

];
@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.css']
})
export class CourseContainerComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'teacherName', 'dateRegister', 'notice'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
