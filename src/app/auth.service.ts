import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { AuthService, SocialUser } from "angular4-social-login";

@Injectable()
export class AuthServiceProvider {

  private LoginUrl = "http://dev-dstack.pantheonsite.io/user/login?_format=json";
  private user: SocialUser;
  private loggedIn: boolean;
  private currentUser : any;
  private token : any;

  constructor(private router: Router, protected httpClient: HttpClient, private authService: AuthService) { }

	doAuth(u,p) {
    const req = this.httpClient.post(this.LoginUrl , {
        name: u,
        pass: p
      }).subscribe(
          res => {
            //console.log(res);
            localStorage.setItem('currentUser', 
              JSON.stringify({ 
                token: res['csrf_token'], 
                name: res['current_user']['name'], 
                uid : res['current_user']['uid'] 
              })
            );
            this.router.navigateByUrl('nodes');
          },
          err => {
            alert('Wrong Credentials!');
            //console.log("Error occured");
          }
    ); 
	}

  authCheck() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser) {
      return this.loggedIn = true;            
    }else{
      this.router.navigateByUrl('/login');
    }
  }

}
