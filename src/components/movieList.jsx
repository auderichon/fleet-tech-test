import React, { Component } from "react";
// import { Link } from "react-router-dom";
import movies from "./../movies.json";
import "./../styles/movieList.css";
import "bulma/css/bulma.css";

let moviesList = JSON.parse(JSON.stringify(movies.results));

class movieList extends Component {
  handleClick = (event) => {
    let value = event.target.value;
    this.props.handleTitleClick(value);
  };

  render() {
    const copy = [...moviesList];
    const filteredMovies = copy.filter((movie) =>
      movie.title.toLowerCase().includes(this.props.searchValue.toLowerCase())
    );

    return (
      <div className="tile is-child box">
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
