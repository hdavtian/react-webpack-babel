import React from 'react';

const Movie = (props) => {
  //console.log(props.name)

  const handleClick = () => {
    props.remove(props.name);
  };

  return (
    <div className="row movie">
      <div className="col-xs-8">
        <span className="movie-name">{props.name}</span>
      </div>
      <div className="col-xs-4">
        <span className='close-btn glyphicon glyphicon-remove' onClick={handleClick}></span>
        <span className='close-btn glyphicon glyphicon-eye-close'></span>
      </div>
    </div>
  )
};

export default Movie;
