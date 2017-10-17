import React from 'react';

const MovieAdder = () => {
  return (
    <div className="movie-adder-container">
        <form>
          <input type="text" className="textbox-movie" placeholder="Type a movie name" />
          <input type="submit" className="btn btn-primary" value="Add movie" />
        </form>

      </div>
  )
};

export default MovieAdder;
