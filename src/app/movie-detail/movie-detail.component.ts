import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieQuery } from '../state/movie.query';
import { Movie } from '../state/movie.model';
import { environment } from 'src/environments/environment';

@Component( {
	selector: 'app-movie-detail',
	templateUrl: './movie-detail.component.html',
	styleUrls: ['./movie-detail.component.scss']
} )
export class MovieDetailComponent implements OnInit
{
	@ViewChild( 'startAnchor', { static: false} ) startAnchor: ElementRef	
	private movieKey: string
	public movie: Movie
	constructor
	(
		private movieQuery: MovieQuery,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	)	
	{
		this.movieKey = this.activatedRoute.snapshot.paramMap.get( 'movie_key' )
	}

	ngOnInit ()
	{
		this.movieQuery.selectAll().subscribe( ( movies: Movie[] ) =>
		{
			this.movie = movies.find( movie => movie.key == this.movieKey )
		} )
	}

	getImagePath ( movie: Movie )
	{
		return `${ environment.apiBase }${ environment.movieCoversEndpoint }/${ movie.img ? movie.img : 'no-image.jpg' }`
	}

	back ()
	{
		this.router.navigate ([''])
	}
}
