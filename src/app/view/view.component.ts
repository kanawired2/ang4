import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../api.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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

  constructor(private modalService: BsModalService,private router: Router, protected httpClient: HttpClient, private apiservice: ApiService) { }

  ngOnInit() {
  	
    this.apiservice.viewContent().subscribe(
      data => {
        let myContainer = <HTMLElement> document.querySelector("#content");
        let myTitle = <HTMLElement> document.querySelector("#title");
        myContainer.innerHTML = data['body'][0]['value'];
        myTitle.innerHTML = data['title'][0]['value'];
        this.created = data['created'][0]['value'];        
        this.title = data['title'][0]['value'];        
      }
    );
  }

  openModalWithComponent() {
    const list = [
      '...'
    ];
    this.bsModalRef = this.modalService.show(ModalContentComponent);
    this.bsModalRef.content.title = 'Loading...';
    this.bsModalRef.content.list = list;
    this.bsModalRef.content.title = this.title;
    list.pop();
    list.push("Created On - " + this.created);
    /*setTimeout(() => {
      this.apiservice.viewContent().subscribe(
        data => {
          console.log(data);   
          this.bsModalRef.content.title = this.title;
          list.pop();
          list.push("Created On - " + this.created);    
        }
      )

    }, 200);*/
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
