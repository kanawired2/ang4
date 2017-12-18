import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule} from '@angular/core';

import { AuthService } from '../auth.service';
import { UserCred } from '../usercred';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform:FormGroup;

  private LoginUrl = "http://dev-dstack.pantheonsite.io/user/login?_format=json";

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.myform = new FormGroup({
        name : new FormControl('', Validators.required),
        pass : new FormControl('', [
          Validators.required
        ]),
    });
  }


  onSubmit(e) {
    
    e.preventDefault();

    
    console.log(this.myform.controls);
    
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;    
    
    this.authservice.doAuth(username, password);
    //this.myform.reset();

           
  }

}
