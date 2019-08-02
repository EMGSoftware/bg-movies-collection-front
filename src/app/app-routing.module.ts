import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
	{
		path: '',
		component: MovieListComponent,
		pathMatch: 'full',
		data: { state: 'Home' }
	},
	{
		path: 'details/:movie_key',
		loadChildren: './movie-detail/movie-detail.module#MovieDetailModule',
		pathMatch: 'full',
		data: { state: 'Details' }
	}];

@NgModule(
{
	imports: [RouterModule.forRoot( routes, { preloadingStrategy: PreloadAllModules } )],
	exports: [RouterModule]
} )
export class AppRoutingModule { }
