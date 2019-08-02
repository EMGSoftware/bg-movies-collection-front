import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../state/movie.model'

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

	it( 'should match genres from a list', () =>
	{
		const fixture = TestBed.createComponent( MovieListComponent );
		fixture.detectChanges();
		const testMovie: Movie =
		{
			id: null,
			key: null,
			name: null,
			description: null,
			genres: ['Action', 'Scifi', 'Drama', 'Biography'],
			length: null,
			rate: null,
			img: null
		}
		const testGenres = ['Scifi', 'Biography']
		expect( fixture.componentInstance.matchGenres (testGenres, testMovie) ).toBe (true)
	} );

	it( 'should match movie from a list', () =>
	{
		const fixture = TestBed.createComponent( MovieListComponent );
		fixture.detectChanges();
		const testMovie: Movie =
		{
			id: null,
			key: null,
			name: 'A_B_C_D_E_F',
			description: null,
			genres: [],
			length: null,
			rate: null,
			img: null
		}
		const testCriteria = 'C_D'
		expect( fixture.componentInstance.matchMovie( testCriteria, testMovie ) ).toBe( true )
	} );

	it( 'should return a valid ImagePath for a movie', () =>
	{
		const fixture = TestBed.createComponent( MovieListComponent );
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
		expect( fixture.componentInstance.getImagePath( testMovie ) ).toContain( '[TestPath]' )
	} );
} );
