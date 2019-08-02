import { Component, OnInit } from '@angular/core';
import { MovieService } from './state/movie.service';
import { Subscription } from 'rxjs';
import { routerTransition } from './route-animation';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [routerTransition]
} )
export class AppComponent implements OnInit
{
	subscription: Subscription

	constructor
	(
		private movieService: MovieService,
	)
	{ }

	ngOnInit ()
	{
		this.subscription = this.movieService.get().subscribe()
	}

	ngOnDestroy ()
	{
		if ( this.subscription ) this.subscription.unsubscribe()
	}
}
