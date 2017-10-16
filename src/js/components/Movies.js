import React from 'react';
import Movie from './Movie';

const Movies = (props) => {
  // console.log(props.list);

  const movies = props.list.map(
    (movie)=>{
      return(
        <Movie name={movie.name} key={movie.name}></Movie>
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
