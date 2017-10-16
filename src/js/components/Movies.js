import React from 'react';
import Movie from './movie'; // seems the source is case insensitive Movie.js and movie.js work

const Movies = (props) => {
  // console.log(props.list);

  const movies = props.list.map(
    (movie)=>{
      return(
        <Movie name={movie.name} key={movie.name} remove={props.remove}></Movie>
      )
    }
  )

  return (
    <div className="movie-list">
      {movies}
    </div>
  )
};

export default Movies;
