import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Content } from "./content";

@Injectable()
export class ApiService {

  /*private URL = "http://local-drupal.com/dtutor/node/188?_format=json";

  constructor(protected httpClient: HttpClient) {}
 
	public getPosts(): Observable<IPosts[]> {
		return this.httpClient
		.get<IPosts[]>(`${this.URL}`)
		.catch(this.handleError);
	}

  	private handleError(error: Response) {
    	return Observable.throw(error.statusText);
 	}*/
}