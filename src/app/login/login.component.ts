import { Component, OnInit } from '@angular/core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginService) {}

  ngOnInit(): void {}
  user = faUser;
  lock = faLock;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  message: any;

  updatedata(data: any) {
    this.login
      .login(data)
      .subscribe((res: any) => (this.message = res.message));
  }
}
