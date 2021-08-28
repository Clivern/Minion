/** @format */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../service/api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	message = '';
	modal = false;
	title = 'Minion | Single Page Application Boilerplate';

	constructor(private apiService: ApiService, private titleService: Title) {}

	ngOnInit(): void {
		console.log('Init');
		this.message = 'Loading';
		this.titleService.setTitle(this.title);

		this.apiService.getStatus().subscribe(
			(result) => {
				console.log(result);
			},
			(res) => {
				console.log(res);
			},
			() => {
				console.log('Done');
				this.message = 'Home Page!';
			}
		);
	}

	toggle() {
		this.modal = true;
		console.log('Open Modal!');
	}

	close() {
		this.modal = false;
		console.log('Close Modal!');
	}

	cancel() {
		this.modal = false;
		console.log('Cancel Modal!');
	}

	save() {
		this.modal = false;
		console.log('Save Modal!');
	}
}
