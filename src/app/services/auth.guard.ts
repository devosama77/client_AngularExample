import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './api/login.service';
import {UserInfoService} from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userInfoService: UserInfoService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.userInfoService.isLoggedIn()) {
      return true;
    }
    console.log('User is not logged - This routing guard prvents redirection to any routes that needs logging.');
    // Store the original url in login service and then redirect to login page
    this.loginService.landingPage = url;
    this.router.navigate(['login', ]);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean |
    UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
