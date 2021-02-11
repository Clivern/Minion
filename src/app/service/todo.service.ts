/** @format */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class TodoService {
	constructor(private http: HttpClient) {}

	getTodos() {
		return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
	}
}
