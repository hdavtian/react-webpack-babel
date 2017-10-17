import React from 'react';

// const MovieAdder = (props) => {

class MovieAdder extends React.Component {

  constructor(props){
    super(props);
    this.state = {term: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({term: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.term == '') {
      alert('Please enter a movie name to add to list');
      return;
    };

    this.props.onClickHandler(this.state.term);
  }

  render(){
    return (
      <div className="movie-adder-container">
          <form onSubmit={this.handleSubmit}>

            <input
              type="text"
              className="textbox-movie"
              placeholder="Type a movie name"
              onChange={this.handleChange}
              value={this.state.term} />

            <input
              type="submit"
              className="btn btn-primary"
              value="Add movie" />

          </form>

        </div>
    )
  }
}

export default MovieAdder;
