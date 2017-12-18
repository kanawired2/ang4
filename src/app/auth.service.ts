import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private LoginUrl = "http://dev-dstack.pantheonsite.io/user/login?_format=json";

  constructor(private router: Router, protected httpClient: HttpClient) { }

  	doAuth(u,p) {
	  const req = this.httpClient.post(this.LoginUrl , {
          name: u,
          pass: p
        }).subscribe(
            res => {
              console.log(res);
              this.router.navigateByUrl('nodes');
            },
            err => {
              alert('Wrong Credentials!');
              console.log("Error occured");
            }
        ); 
  	}

}
