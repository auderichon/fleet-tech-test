import React, { Component } from "react";
import "bulma/css/bulma.css";

import Movie from "./../components/movie";
import MovieList from "./../components/movieList";
import SearchBar from "./../components/searchBar";

class Home extends Component {
  state = {
    searchValue: "",
    moviesList: [],
    displayedMovie: 0,
  };

  handleSearchChange = (value) => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <SearchBar handleSearchChange={this.handleSearchChange} />
            <MovieList />
          </div>
          <Movie />
        </div>
      </div>
    );
  }
}

export default Home;
