import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-students',
  templateUrl: './dash-students.component.html',
  styleUrls: ['./dash-students.component.css']
})
export class DashStudentsComponent implements OnInit {
  constructor() { }

  public doughnutChartLabels = ['Phase 1', 'Phase 2', 'Phase 3'];
  public doughnutChartData = [120, 150, 180];
  public doughnutChartType = 'doughnut';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [ '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [ 80, 81, 56, 55, 40], label: 'Phase 1'},
    {data: [ 40, 19, 86, 27, 90], label: 'Phase 2'},
    {data: [ 40, 19, 86, 27, 90], label: 'Phase 3'}
  ];

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
