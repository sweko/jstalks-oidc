import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public username: string = "";
  public password: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.userService.login(this.username, this.password);
  }

}
