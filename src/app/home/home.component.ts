/** @format */

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	message = '';
	modal = false;

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		console.log('Init');
		this.message = 'Loading';

		this.apiService.getStatus().subscribe(
			(result) => {
				console.log(result);
			},
			(res) => {
				console.log(res);
			},
			() => {
				console.log('Done');
				this.message = 'Home Works!';
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
