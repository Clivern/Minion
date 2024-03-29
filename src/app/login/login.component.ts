/** @format */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	title = 'Minion | Login';

	constructor(private titleService: Title) {}

	ngOnInit(): void {
		console.log('Init');
		this.titleService.setTitle(this.title);
	}
}
