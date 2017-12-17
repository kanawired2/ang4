import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { IPosts } from "./posts";
import { User } from "./user";

@Injectable()
export class ApiService {

  private URL = "http://dev-dstack.pantheonsite.io/jcontent";
  private URL_users = "http://dev-dstack.pantheonsite.io/jusers";

  private ContentUrl = "";

  	/*Hero = [{
  		name:'admin',
  		pass:'admin123'
  	}];*/

  constructor(protected httpClient: HttpClient) {}
 
	public getUsers(): Observable<Users[]> {
		return this.httpClient
		.get<Users[]>(`${this.URL_users}`)
		.catch(this.handleError);
	}

  public getPosts(): Observable<IPosts[]> {
    return this.httpClient
    .get<IPosts[]>(`${this.URL}`)
    .catch(this.handleError);
  }


  viewContent(e){ 
   
    this.ContentUrl = e.target.href;

    return this.httpClient.get(this.ContentUrl).subscribe(data => {
      console.log(data);
    });     
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