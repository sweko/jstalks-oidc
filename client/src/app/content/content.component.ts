import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  @Input()
  public user!: string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  logout(): void {
    console.log("logout");
    this.userService.logout();
  }

}
