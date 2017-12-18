import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { IPosts } from "./posts";
import { User } from "./user";

@Injectable()
export class ApiService {

  private URL = "http://dev-dstack.pantheonsite.io/jcontent";
  private URL_users = "http://dev-dstack.pantheonsite.io/jusers";
  private URL_node = "http://dev-dstack.pantheonsite.io/node/";

  private ContentUrl = "";
  arg: any;
  node_url: any;

  constructor(protected httpClient: HttpClient, private router: Router) {}
 
	public getUsers(): Observable<Users[]> {
		return this.httpClient
		.get<Users[]>(`${this.URL_users}`)
		.catch(this.handleError);
	}

  public getPosts() {
    return this.httpClient
    .get(`${this.URL}`)
    .catch(this.handleError);
  }


  viewContent(){ 
    this.arg = this.router.url.split('/');
    this.node_url = this.URL_node + this.arg[this.arg.length - 1] + "?_format=json";
    
    return this.httpClient.get(this.node_url);
  }  
	

  	private handleError(error: Response) {
    	return Observable.throw(error.statusText);
 	}
}

export interface Users {
  id: number;
  name: string;
  email: string;
}