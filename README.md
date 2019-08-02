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

- _Git-clone_ both repositories:
  - [https://github.com](https://github.com) Front-end
  - [https://github.com](https://github.com) Back-end
- _NPM-install_ them
- _NPM-run-start_ each one.
- And we are ready to go!
> By default the back-end is listening at port 3000 and the Front-end is listening at port 4200.