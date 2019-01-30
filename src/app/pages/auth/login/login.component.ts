import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/api/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder , private router: Router,
              private loginService: LoginService) { }

  loginGroup = this.fb.group({
    userName: [''],
    password: ['']
  });

  errMsg = '';

  ngOnInit() {
    // reset login status
    this.loginService.logout(false);
  }

  login() {
    this.loginService.getToken(this.loginGroup.value.username, this.loginGroup.value.password)
      .subscribe(resp => {
          if (resp.user === undefined || resp.user.token === undefined || resp.user.token === 'INVALID' ) {
            this.errMsg = 'Username or password is incorrect';
            return;
          }
          this.router.navigate([resp.landingPage]);
        },
        errResponse => {
          switch (errResponse.status) {
            case 401:
              this.errMsg = 'Username or password is incorrect';
              break;
            case 404:
              this.errMsg = 'Service not found';
            case 408:
              this.errMsg = 'Request Timedout';
            case 500:
              this.errMsg = 'Internal Server Error';
            default:
              this.errMsg = 'Server Error';
          }
        }
      );
  }

  onSignUp() {
    this.router.navigate(['signup']);
  }


}
