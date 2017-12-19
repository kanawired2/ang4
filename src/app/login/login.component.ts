import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule} from '@angular/core';
import {Router} from "@angular/router";

import { AuthServiceProvider } from '../auth.service';
import { UserCred } from '../usercred';

import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform:FormGroup;

  private LoginUrl = "http://dev-dstack.pantheonsite.io/user/login?_format=json";

  constructor(private authservice: AuthServiceProvider, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.myform = new FormGroup({
        name : new FormControl('',[
                       Validators.required,
                       Validators.minLength(5)
        ]),
        pass : new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]),
    });
  }

  doReset(){
    this.myform.reset();
  }

  doSubmit(e) {
    
    e.preventDefault();

    
    console.log(this.myform.controls);
    
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;    
    
    this.authservice.doAuth(username, password);
    //this.myform.reset();

           
  }

  signInWithGoogle(): void {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigateByUrl('demo');
  }
 
  signInWithFB(): void {
    this.auth.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.auth.signOut();
  }

}
