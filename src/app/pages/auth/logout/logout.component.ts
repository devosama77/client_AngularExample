import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../../../services/user-info.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private userInfoService: UserInfoService) {
    this.userInfoService.removeUserInfo();
  }
  ngOnInit() {
  }
}
