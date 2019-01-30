import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  fatherJob: string;
  birthday: Date;
  phone1: string;
  phone2: string;
  address: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Yasser Ahmed Elnajar', fatherJob: 'Teacher', birthday : new Date(),
    phone1: '22233344455', phone2: '111999888', address: 'Gaza Strip - jabalia'},

  {position: 2, name: 'Yasser Ahmed Elnajar', fatherJob: 'Teacher', birthday : new Date(),
    phone1: '22233344455', phone2: '111999888', address: 'Gaza Strip - jabalia'},

  {position: 3, name: 'Yasser Ahmed Elnajar', fatherJob: 'Teacher', birthday : new Date(),
    phone1: '22233344455', phone2: '111999888', address: 'Gaza Strip - jabalia'},

  {position: 4, name: 'Yasser Ahmed Elnajar', fatherJob: 'Teacher', birthday : new Date(),
    phone1: '22233344455', phone2: '111999888', address: 'Gaza Strip - jabalia'},

];

@Component({
  selector: 'app-student-container',
  templateUrl: './student-container.component.html',
  styleUrls: ['./student-container.component.css']
})
export class StudentContainerComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'fatherJob', 'birthday', 'phone1'
    , 'phone2', 'address'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
