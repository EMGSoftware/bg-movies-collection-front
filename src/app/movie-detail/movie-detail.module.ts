import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import { SharedMaterialModule } from '../shared-material.module';
import { RatingModule } from 'ng-starrating';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule( {
	declarations: [MovieDetailComponent],
	imports: [
		CommonModule,
		SharedMaterialModule,
		RatingModule,
		FlexLayoutModule,
		RouterModule,
		MovieDetailRoutingModule
	]
} )
export class MovieDetailModule { }
