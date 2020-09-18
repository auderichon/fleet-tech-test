import React, { Component } from "react";

import "./../styles/movieList.css";
import "bulma/css/bulma.css";

class movieList extends Component {
  handleClick = (event) => {
    let value = event.target.value;
    this.props.handleTitleClick(value);
  };

  render() {
    const filteredMovies = this.props.movieList.filter((movie) =>
      movie.title.toLowerCase().includes(this.props.searchValue.toLowerCase())
    );

    return (
      <div className="tile is-child box mobile-display">
        <ul>
          {filteredMovies.map((movie) => (
            <li
              className="hovered"
              id={this.props.movieId === movie.id ? "highlighted" : ""}
              onClick={this.handleClick}
              key={movie.id}
              value={movie.id}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default movieList;
