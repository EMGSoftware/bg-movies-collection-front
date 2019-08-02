import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieStore } from './movie.store';
import { Movie } from './movie.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable( { providedIn: 'root' } )
export class MovieService
{

	constructor
	(
		private movieStore: MovieStore,
		private http: HttpClient
	)
	{ }

	get (): Observable<Movie[]>
	{
		return this.http.get<Movie[]>( `${ environment.apiBase }${ environment.moviesEndpoint }` ).pipe( tap( entities =>
		{
			this.movieStore.set( entities )
		} ) )
	}
}
