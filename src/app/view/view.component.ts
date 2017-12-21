import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../api.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AuthServiceProvider } from '../auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  bsModalRef: BsModalRef;
  node:any;
  created:any;
  title:any;
  uid:number;
  private loggedIn: boolean;

  constructor(private modalService: BsModalService,private router: Router, protected httpClient: HttpClient, private apiservice: ApiService, private authService: AuthServiceProvider) { }

  ngOnInit() {
  	this.loggedIn = this.authService.authCheck();
    if(this.loggedIn) {
      this.apiservice.viewContent().subscribe(
        data => {
          let myContainer = <HTMLElement> document.querySelector("#content");
          let myTitle = <HTMLElement> document.querySelector("#title");
          myContainer.innerHTML = data['body'][0]['value'];
          myTitle.innerHTML = data['title'][0]['value'];
          this.created = data['created'][0]['value'];        
          this.title = data['title'][0]['value'];        
          this.uid = data['uid'][0]['target_id'];        
        }
      );  
    }else
      this.router.navigateByUrl('login');      
    
  }

  openModalWithComponent() {
    const list = [
      '...'
    ];
    this.bsModalRef = this.modalService.show(ModalContentComponent);
    this.bsModalRef.content.title = 'Loading...';
    this.bsModalRef.content.list = list;
    this.bsModalRef.content.title = this.title;
    
    if(this.uid == 0){
      list.pop();
      list.push("Console generated content");    
      list.push("Created On - " + this.created);
    }else{
      setTimeout(() => {
        this.apiservice.getUser(this.uid).subscribe(
          data => {
            list.pop();
            list.push("User - " + data['name'][0]['value']);    
            list.push("Created On - " + this.created);    
          }
        );
      }, 200);  
    }
    
  }

}


 /* This is a component which we pass in modal*/
 
@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ul *ngIf="list.length">
        <li *ngFor="let item of list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  `
})
export class ModalContentComponent {
  title: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}
}
