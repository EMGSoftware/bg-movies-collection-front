import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { MovieQuery } from '../state/movie.query';
import { Movie } from '../state/movie.model';
import { Router } from '@angular/router';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Component( {
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.scss']
} )
export class MovieListComponent implements OnInit, OnDestroy
{
	@ViewChild( 'searchBox', { static: true } ) searchBox: ElementRef
	loading$: Observable<boolean>
	movies$: Observable<Movie[]>
	moviesFullList$: Observable<Movie[]>
	moviesFilteredByGenre$: Observable<Movie[]>
	searchSubscription: Subscription
	selectedGenres: string[] = []
	availableGenres: string[] = ['Action', 'Adventure', 'Biography', 'Comedy', 'Crime', 'Drama', 'History', 'Mistery', 'Scifi', 'Sport', 'Thriller']

	constructor
	(
		private movieQuery: MovieQuery,
		private router: Router,
	)
	{ }

	ngOnInit ()
	{
		this.loading$ = this.movieQuery.selectLoading()
		this.moviesFullList$ = this.movieQuery.selectAll()
		this.movies$ = this.moviesFullList$
		this.moviesFilteredByGenre$ = this.moviesFullList$

		this.searchSubscription = fromEvent( this.searchBox.nativeElement, 'input' )
			.pipe(
				map( event => event['target']['value'] ),
				debounceTime( 500 ),
				distinctUntilChanged(),
				map( query =>
					query.length ?
						this.moviesFilteredByGenre$.pipe( map( movies => movies.filter( movie => this.matchMovie( query, movie) ) ) )
						:
						this.moviesFilteredByGenre$
				)
		).subscribe( data => this.movies$ = data )
		
		if ( document.getElementById( "start" ) ) document.getElementById( "start" ).style.display = 'none'
	}

	ngOnDestroy ()
	{
		this.searchSubscription.unsubscribe()
	}

	genreSelectionChanged ()
	{
		this.searchBox.nativeElement.value = ''
		this.moviesFilteredByGenre$ = this.moviesFullList$.pipe( map( movies => movies.filter( movie => !this.selectedGenres.length || this.matchGenres( this.selectedGenres, movie ) ) ) )
		this.movies$ = this.moviesFilteredByGenre$
	}

	matchMovie ( query, movie: Movie )
	{
		return (
			movie.name.toLowerCase().indexOf( query.toLowerCase() ) > -1 ||
			movie.description.toLowerCase().indexOf( query.toLowerCase() ) > -1
		)
	}

	matchGenres ( query: string[], movie: Movie)
	{
		var regex = new RegExp( query.join( "|" ), "i" )
		return (
			movie.genres.filter( genre => regex.test( genre ) ).length > 0
		)
	}

	getImagePath ( movie: Movie )
	{
		return `${ environment.apiBase }${ environment.movieCoversEndpoint }/${ movie.img ? movie.img : 'no-image.jpg' }`
	}

	toggleGenre ( whichGenre: string )
	{
		whichGenre = whichGenre[0].toUpperCase() + whichGenre.slice( 1 )
		if ( this.selectedGenres.includes( whichGenre ) )
		{
			this.selectedGenres = this.selectedGenres.filter( genre => genre != whichGenre )
		}
		else
		{
			this.selectedGenres = this.selectedGenres.concat( [whichGenre] )
		}
		this.genreSelectionChanged()
	}

	showDetails ( movie: Movie )
	{
		this.router.navigate( [`details/${ movie.key }`] )
	}
}
