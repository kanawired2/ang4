import { Component, OnInit } from '@angular/core';
import { AuthServiceProvider } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	private loggedIn: boolean;
	constructor(private authService:AuthServiceProvider) {
		this.loggedIn = this.authService.authCheck();
	}

	ngOnInit() {
	}

}
