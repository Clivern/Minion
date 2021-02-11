/** @format */

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	message = '';

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		console.log('Init');
		this.message = 'Loading';

		this.todoService.getTodos().subscribe(
			(todos) => {
				console.log(todos);
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
}
