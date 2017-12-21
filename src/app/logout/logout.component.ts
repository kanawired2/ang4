import { Component, OnInit } from '@angular/core';

import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  	this.authService.signOut();
  	localStorage.clear();
  	this.router.navigateByUrl("/");
  }

}
