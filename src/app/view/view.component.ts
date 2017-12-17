import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private router: Router, protected httpClient: HttpClient) { }

  public href: string = "";
        url: string = "asdf";
        arg: any;

  ngOnInit() {
  	this.href = this.router.url;
    this.arg = this.href.split('/');
    this.arg = this.arg[this.arg.length -1];
    this.url = "http://dev-dstack.pantheonsite.io/node/" + this.arg + "?_format=json";
    console.log(this.arg);
    this.httpClient.get(this.url).subscribe(data => {
            console.log(data);            
            let myContainer = <HTMLElement> document.querySelector("#content");
            let myTitle = <HTMLElement> document.querySelector("#title");
            myContainer.innerHTML = data['body'][0]['value'];
            myTitle.innerHTML = data['title'][0]['value'];
            //alert(data['title'][0]['value']);            
        });
  }

}
