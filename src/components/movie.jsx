import React, { Component } from "react";

import "./../styles/Movie.css";

class movieBlock extends Component {
  render() {
    if (this.props.movieDetails === null) {
      return null;
    }

    let movie = this.props.movieDetails;
    let movieUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;

    return (
      <div className="tile is-parent" id="movie">
        <div className="tile is-child box">
          <div className="flex-container">
            <img src={movieUrl} alt={movie.title} />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.vote_average} / 10 </p>
            </div>
          </div>
          <p id="overview">{movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default movieBlock;
