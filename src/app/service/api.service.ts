/** @format */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Result {
	status: string;
}

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	getStatus() {
		return this.http.get<Result>('/api/_health');
	}
}
