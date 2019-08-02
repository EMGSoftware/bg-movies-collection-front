# Movies Collection

## General Information:

The solution is composed of two projects: A front-end application made with Angular and a simple back-end application made with NestJS.

### The Front-end

The main page shows a list of movies where users can filter by one or more genres (Action, Comedy, etc.) and search for films just typing part of their names or descriptions.
Under the movie title is the genre list. Clicking on one of the genres, toggles that specific genre and filters the movies list.
Below the movie's cover there is a button named "More Details" that navigates to a page with some more information about that movie, including a short synopsis, rating and duration.

#### Technologies used

- **Angular 8**
  - Angular Material
  - Angular Flex Layout
  - Angular Animations
  - RxJS
  - SASS
  - Lazy & Eager  Loading
- **Akita** for state management

### The Back-end

Made with the amazing [NestJS](http://nestjs.com/) framework (heavily inspired from Angular), it provides both the front-end build artifacts and the API endpoints needed to get the list of movies and cover images.


> **You can road-test the full solution right now, kindly hosted by Heroku at [https://bg-moviescollection.herokuapp.com](https://bg-moviescollection.herokuapp.com)**

## Installation:

- _`Git-clone`_ both repositories at Github:
  - [Front-end](https://github.com/EMGSoftware/bg-movies-collection-front)
  - [Back-end](https://github.com/EMGSoftware/bg-movies-collection-back)
- _`NPM-install`_ them
- _`NPM-run-start`_ each one.
- And we are ready to go!
> By default the back-end is listening at port 3000 and the Front-end is listening at port 4200. You can run the application at http://localhost:4200
> 
> Running locally Angular will serve it's own build artifacts with _ng serve_ at port 4200 and the back-end will just serve the API at port 3000. 
> If you prefer the back-end to serve the full solution locally, you need to do a `ng build` in the front-end installation folder and copy the contents of `[front-end folder]/dist/movie-showcase` to `[back-end folder]/front`. After doing that you can access the application normally at http://localhost:3000. The Heroku deployment is configured that way. 