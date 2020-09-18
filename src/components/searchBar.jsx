import React, { Component } from "react";

import "./../styles/searchBar.css";
import "bulma/css/bulma.css";

class searchBar extends Component {
  handleSearch = (event) => {
    let value = event.target.value;
    this.props.handleSearchChange(value);
  };

  render() {
    return (
      <div className="tile is-child box" id="searchBar">
        <p className="control has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Look for a movie here"
            value={this.props.searchValue}
            onChange={this.handleSearch}
          />
          <span className="icon is-small is-right">
            <i className="fas fa-search"></i>
          </span>
        </p>
      </div>
    );
  }
}

export default searchBar;
