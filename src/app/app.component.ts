import { Component,OnInit } from '@angular/core';

import { AuthService } from "angular4-social-login";
import { AuthServiceProvider } from './auth.service';
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  session:any;
  private user: SocialUser;
  private loggedIn: boolean;
  private user_data: any;

  constructor(private authService:AuthServiceProvider) {
  	this.loggedIn = this.authService.authCheck();
  }

}
