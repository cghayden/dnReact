import React, { Component } from "react";

export default class ActiveFiltersBar extends Component {
  render() {
    return (
      <div>
        <div class="activeFiltersBar-heading">
          <h4 className="pv1">Active Filters</h4>
          <button className="filterButton" onClick={this.props.clearFilter}>
            Clear All
          </button>
        </div>

        <ul class="currentFilter-labels">
          {this.props.checked.map(catName => (
            <li key={catName[1]}>{catName[1]}</li>
          ))}
        </ul>
      </div>
    );
  }
}
