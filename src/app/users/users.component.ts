import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import {NgxPaginationModule} from 'ngx-pagination';


import { AuthService, SocialUser } from "angular4-social-login";

import { AuthServiceProvider } from '../auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  result:any;
  p: number = 1;
  private loggedIn: boolean;


  private URL_users = "http://dev-dstack.pantheonsite.io/jusers";

  constructor(private router: Router, protected httpClient: HttpClient,private authService: AuthServiceProvider, private authservice: AuthService) { }

  ngOnInit() {
  	
    /*this.authService.authState.subscribe((user) => {
      if(!user)
        this.router.navigateByUrl('login');
      else {
        this.httpClient.get(this.URL_users).subscribe(
          resultArray => this.result = resultArray,
          error => console.log("Error :: " + error)
        );
      }
    });*/
    this.loggedIn = this.authService.authCheck();
    if(this.loggedIn)
      this.httpClient.get(this.URL_users).subscribe(
        resultArray => this.result = resultArray,
        error => console.log("Error :: " + error)
      );
    else
      this.router.navigateByUrl('login');  		
  }

  	
	private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
