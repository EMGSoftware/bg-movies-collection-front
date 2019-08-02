import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe( 'MovieListComponent', () =>
{
	let component: MovieListComponent;
	let fixture: ComponentFixture<MovieListComponent>;

	beforeEach( async( () =>
	{
		TestBed.configureTestingModule( {

			imports: [
				RouterTestingModule,
			],
			declarations: [MovieListComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		} )
		.compileComponents();
	} ) );

	beforeEach( () =>
	{
		fixture = TestBed.createComponent( MovieListComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () =>
	{
		expect( component ).toBeTruthy();
	} );
} );
