import React from 'react';

// We need state, so need to convert to a class

class Movie extends React.Component {
  //console.log(props.name)

  constructor(props){
    super(props);
    this.state = {hasSeen: false}

    //binding `this` to methods
    this.handleClick = this.handleClick.bind(this);
    this.handleSeen = this.handleSeen.bind(this);
  }

  handleClick() {
    this.props.remove(this.props.name);
  }

  handleSeen() {
    // toggle true/false on each click
    this.setState({hasSeen: !(this.state.hasSeen)})
  }

  render(){
    return (
      <div className={this.state.hasSeen ? 'row movie crossed-out' : 'row movie'}>
        <div className="col-xs-8">
          <span className="movie-name">{this.props.name}</span>
        </div>
        <div className="col-xs-4">
          <span className='close-btn glyphicon glyphicon-remove' onClick={this.handleClick}></span>
          <span className='close-btn glyphicon glyphicon-eye-close' onClick={this.handleSeen}></span>
        </div>
      </div>
    )
  }
};

export default Movie;
