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
      <div class="tile is-child box">
        <p class="control has-icons-right">
          <input
            class="input"
            type="text"
            placeholder="Look for a movie here"
            value={this.props.searchValue}
            onChange={this.handleSearch}
          />
          <span class="icon is-small is-right">
            <i class="fas fa-search"></i>
          </span>
        </p>
      </div>
    );
  }
}

export default searchBar;
