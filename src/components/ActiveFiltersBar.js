import React, { Component } from "react";

export default class ActiveFiltersBar extends Component {
  render() {
    return (
      <div>
        <h4>Active Filters:</h4>

        <ul class="currentFilter-labels">
          {this.props.checked.map(catName => (
            <li key={catName[1]}>{catName[1]}</li>
          ))}
        </ul>
      </div>
    );
  }
}
