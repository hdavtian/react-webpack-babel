import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/Movies';

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

    const movies = [
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

    // set state with movies: movies
    this.state = {movies};
  };

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
              <p>This is a my variation of the popular "todo app" written using AngularJs, Webpack, Bootstrap, Sass and Babel. Instead of adding to a list of todo\'s, you are adding movies to a watch list.</p>
              <p><a href="#">Tutorial</a> | <a href="#">Github</a> | By: <a href="#">Harma Davtian</a></p>
            </div>

            <div className="col-sm-6 right-col">
              <div className="content">
                <movie-adder></movie-adder>
                <Movies list={this.state.movies}></Movies>
              </div>
            </div>

          </div>
        </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('container'));
