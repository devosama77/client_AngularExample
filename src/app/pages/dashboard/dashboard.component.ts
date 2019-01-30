import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  studentActive = false;
  courseActive = false;
  selectedHeaderItemIndex;
  selectedSubNavItemIndex;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   const pro = new Promise(resolve => {
     this.setPathInfo();
   });

  }
goStudents() {
this.router.navigate(['./students'], {relativeTo : this.route});
this.studentActive = true;
  this.courseActive = false;
}
goCourses() {
  this.router.navigate(['./courses'], {relativeTo : this.route});
  this.courseActive = true;
  this.studentActive = false;
}

setPathInfo() {
  // This block is to retrieve the data from the routes (routes are defined in app-routing.module.ts)
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(_ => this.router.routerState.root),
    map(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }),
    mergeMap(route => route.data)
  ).subscribe(data => {
    console.log('Route data===: ', data[0]);
    this.selectedHeaderItemIndex = data[0] ? data[0].selectedHeaderItemIndex : -1;
    this.selectedSubNavItemIndex = data[0] ? data[0].selectedSubNavItemIndex : -1;
  });
}
}
