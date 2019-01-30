import { Injectable } from '@angular/core';
import {AppConfig} from '../../app-config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserInfoService} from '../user-info.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  // getHeaders():HttpHeaders {
  //   let headers = new HttpHeaders();
  //   let token = this.userInfoService.getStoredToken();
  //   headers = headers.append('Content-Type', 'application/json');
  //   if (token !== null) {
  //     headers = headers.append("Authorization", token);
  //   }
  //   return headers;
  // }

  constructor(
    private appConfig: AppConfig,
    private http: HttpClient,
    private router: Router,
    private userInfoService: UserInfoService
  ) { }

  get(url: string, urlParams?: HttpParams): Observable<any> {
    const me = this;
    return this.http.get(this.appConfig.baseApiPath + url, {params: urlParams} )
      .pipe(
        catchError(function(error: any) {
          console.log('Some error in catch');
          if (error.status === 401 || error.status === 403) {
            me.router.navigate(['/logout']);
          }
          return throwError(error || 'Server error');
        })
      );
  }

  post(url: string, body: Object): Observable<any> {
    const me = this;
    return this.http.post(this.appConfig.baseApiPath + url, JSON.stringify(body) )
      .pipe(
        catchError(function(error: any) {
          if (error.status === 401) {
            me.router.navigate(['/logout']);
          }
          return throwError(error || 'Server error');
        })
      );
  }

  put(url: string, body: Object): Observable<any> {
    const me = this;
    return this.http.put(this.appConfig.baseApiPath + url, JSON.stringify(body))
      .pipe(
        catchError(
          function(error: any) {
            if (error.status === 401) {
              me.router.navigate(['/logout']);
            }
            return throwError(error || 'Server error');
          }
        )
      );
  }

  delete(url: string): Observable<any> {
    const me = this;
    return this.http.delete(this.appConfig.baseApiPath + url)
      .pipe(
        catchError(function(error: any) {
          if (error.status === 401) {
            me.router.navigate(['/logout']);
          }
          return throwError(error || 'Server error');
        })
      );
  }

}
