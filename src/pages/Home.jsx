import React, { Component } from "react";

import apiHandler from "./../api/apiHandler";

import "bulma/css/bulma.css";

import Movie from "./../components/movie";
import MovieList from "./../components/movieList";
import SearchBar from "./../components/searchBar";

class Home extends Component {
  state = {
    searchValue: "",
    displayedMovie: null,
    displayedMovieDetails: null,
    movieList: [],
  };

  handleSearchChange = (value) => {
    this.setState({ searchValue: value });
  };

  handleTitleClick = (value) => {
    let movieDetails = this.state.movieList.filter(
      (movie) => movie.id === value
    );
    movieDetails = movieDetails[0];

    this.setState({
      displayedMovie: value,
      displayedMovieDetails: movieDetails,
    });
  };

  componentDidMount() {
    apiHandler
      .getMovies()
      .then((apiRes) => {
        console.log(apiRes.data);
        this.setState({ movieList: apiRes.data.results });
      })
      .catch((apiError) => console.log(apiError));
  }

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
            movieList={this.state.movieList}
            handleTitleClick={this.handleTitleClick}
          />
        </div>
        <Movie movieDetails={this.state.displayedMovieDetails} />
      </div>
    );
  }
}

export default Home;
