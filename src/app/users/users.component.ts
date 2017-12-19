import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  result:any;
  p: number = 1;

  private URL_users = "http://dev-dstack.pantheonsite.io/jusers";

  constructor(private router: Router, protected httpClient: HttpClient) { }

  ngOnInit() {
  	

		this.httpClient.get(this.URL_users).subscribe(
            resultArray => this.result = resultArray,
            error => console.log("Error :: " + error)
        );
  }

  	
	private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
