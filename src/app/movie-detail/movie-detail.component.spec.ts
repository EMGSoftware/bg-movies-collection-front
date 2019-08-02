import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedMaterialModule } from '../shared-material.module';
import { RatingModule } from 'ng-starrating';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../state/movie.model'

describe( 'MovieDetailComponent', () =>
{
	let component: MovieDetailComponent;
	let fixture: ComponentFixture<MovieDetailComponent>;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {
			imports: [
				SharedMaterialModule,
				RatingModule,
				FlexLayoutModule,
				RouterTestingModule,
				MovieDetailRoutingModule,
			],
			declarations: [MovieDetailComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		} )
			.compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( MovieDetailComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () =>
	{
		expect( component ).toBeTruthy();
	} );

	it( 'should return a valid ImagePath for a movie', () =>
	{
		const fixture = TestBed.createComponent( MovieDetailComponent );
		fixture.detectChanges();
		const testMovie: Movie =
		{
			id: null,
			key: null,
			name: null,
			description: null,
			genres: [],
			length: null,
			rate: null,
			img: '[TestPath]'
		}
		expect( fixture.componentInstance.getImagePath( testMovie ) ).toContain('[TestPath]')
	} );
} );
