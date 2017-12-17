import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
//import { Users } from "./users";

@Injectable()
export class UserServiceService {

  /*private URL = "http://local-drupal.com/dtutor/jcontent";

  constructor(protected httpClient: HttpClient) {}
 
	public getPosts(): Observable<IPosts[]> {
		return this.httpClient
		.get<IPosts[]>(`${this.URL}`)
		.catch(this.handleError);
	}

  
	public create(hero: User): Observable<User> {
		return this.httpClient.post<User>(this.LoginUrl, hero);
	}

  	private handleError(error: Response) {
    	return Observable.throw(error.statusText);
 	}*/
}