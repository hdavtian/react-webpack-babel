import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/movies';
import MovieAdder from './components/movie-adder';
import ReloadButton from './components/reload-button';

// Styles -----------------------------------
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// custom
import '../css/style.scss';

// const App = function() {
//   return <Movies></Movies>;
// };

// converting App from a functional component to a component using ES6 syntax
class App extends React.Component {

  constructor(props){
    super(props);

    const movies = this.getMovies();

    // set state with movies: movies
    this.state = {movies};

    // bind `this` context on methods to avoid future confusion and hard to resolve
    // `this` related bugs
    this.remove = this.remove.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.adder = this.adder.bind(this);
  };

  getMovies(){
    return [
      {
        "name": "Gone With The Wind"
      },
      {
        "name": "Star Wars"
      },
      {
        "name": "Kelly's Heros"
      },
      {
        "name": "Patton"
      },
      {
        "name": "Goldfinger"
      }
    ];
  }

  loadMovies(){
    this.setState({
      movies: this.getMovies()
    })
  }

  adder(movie){
    let movies = this.state.movies;
    movies.push({name: movie});
    this.setState({movies});
  }

  remove(movie) {

    const movies = this.state.movies;

    for(var i=0, l=movies.length; i<l; i++){
      if (movies[i].name === movie) {
        movies.splice(i, 1);

        this.setState({
          movies
        });

        return;
      }
    }

  }

  render(){
    //console.log(this.state.movies);
    return (
      // passing movies down the chain, eventually to <Movie>
      <div className="row">
          <div className="col-sm-10 col-sm-offset-1 main-container">

            <div className="col-sm-6 left-col">
              <div className="divider">
                <div className="glyphicon glyphicon-film"></div>
              </div>

              <h1>Movie Watchlist App</h1>
              <h4>AngularJS, Webpack, Bootstrap, Sass, Babel</h4>
              <p>This is a my variation of the popular "todo app" written using React, Webpack, Bootstrap, Sass and Babel. Instead of adding to a list of todo\'s, you are adding movies to a watch list.</p>
              <p><a href="#">Tutorial</a> | <a href="#">Github</a> | By: <a href="#">Harma Davtian</a></p>
            </div>

            <div className="col-sm-6 right-col">
              <div className="content">
                <MovieAdder onClickHandler={this.adder}></MovieAdder>
                <Movies list={this.state.movies} remove={this.remove}></Movies>
                <ReloadButton onClickHandler={this.loadMovies} />
              </div>
            </div>

          </div>
        </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('container'));
