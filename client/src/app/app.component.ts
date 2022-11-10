import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public title: string = 'jstalks-oidc-client';

  constructor(private userService: UserService) { }

  public get user(): string | undefined {
    return this.userService.user;
  }
}
