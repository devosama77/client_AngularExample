import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {UserInfoService} from './services/user-info.service';
import {LoginService} from './services/api/login.service';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showAppAlert = false;

  public selectedHeaderItemIndex = 0;
  public selectedSubNavItemIndex = 1;
  public userName = '';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private loginService: LoginService,
    private userInfoService: UserInfoService,
    private breakpointObserver: BreakpointObserver
  ) {
    // This block is to retrieve the data from the routes (routes are defined in app-routing.module.ts)
    // router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(_ => this.router.routerState.root),
    //   map(route => {
    //     while (route.firstChild) {
    //       route = route.firstChild;
    //     }
    //     return route;
    //   }),
    //   mergeMap(route => route.data)
    // ).subscribe(data => {
    //   console.log('Route data===: ', data[0]);
    //   this.selectedHeaderItemIndex = data[0] ? data[0].selectedHeaderItemIndex : -1;
    //   this.selectedSubNavItemIndex = data[0] ? data[0].selectedSubNavItemIndex : -1;
    // });
    // // this.userName = this.userInfoService.getUserName();
    // this.userName = 'Ahmed Ahmed Ahmed';
  }

  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        return result.matches; })
    );
}
