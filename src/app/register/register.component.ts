/** @format */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
	title = 'Minion | Register';

	constructor(private titleService: Title) {}

	ngOnInit(): void {
		console.log('Init');
		this.titleService.setTitle(this.title);
	}
}
