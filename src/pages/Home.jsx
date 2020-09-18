import React, { Component } from "react";

import "bulma/css/bulma.css";

import Movie from "./../components/movie";
import MovieList from "./../components/movieList";
import SearchBar from "./../components/searchBar";

class Home extends Component {
  state = {
    searchValue: "",
    displayedMovie: null,
  };

  handleSearchChange = (value) => {
    this.setState({ searchValue: value });
  };

  handleTitleClick = (value) => {
    this.setState({ displayedMovie: value });
  };

  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <SearchBar
            handleSearchChange={this.handleSearchChange}
            searchValue={this.state.searchValue}
          />
          <MovieList
            searchValue={this.state.searchValue}
            movieId={this.state.displayedMovie}
            handleTitleClick={this.handleTitleClick}
          />
        </div>
        <Movie movieId={this.state.displayedMovie} />
      </div>
    );
  }
}

export default Home;
