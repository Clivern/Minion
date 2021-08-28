/** @format */

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		RegisterComponent,
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule],
	providers: [Title],
	bootstrap: [AppComponent],
})
export class AppModule {}
