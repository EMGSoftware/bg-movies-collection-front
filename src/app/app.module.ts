import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment'
import { SharedMaterialModule } from './shared-material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule( {
	declarations: [
		AppComponent,
		MovieListComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedMaterialModule,
		FlexLayoutModule,
		HttpClientModule,
		RouterModule,
		FormsModule,
		environment.production ? [] : AkitaNgDevtools.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent]
} )
export class AppModule { }
