import React, { Component } from "react";
import PropTypes from "prop-types";
import FilterButton from "./FilterButton";

class Filter extends Component {
  render() {
    return (
      <div>
        <h5>{this.props.category}</h5>
        <div>
          <ul>
            {this.props.choices.map(choice => (
              <FilterButton
                key={choice}
                text={choice}
                name={choice}
                category={this.props.category}
                handleFilterButton={this.props.handleFilterButton}
              />
            ))}
          </ul>
        </div>

        {/* {this.props.choices.map(choice => (
          <div key={choice}>
            <label>
              <input
                className="filterCheckbox"
                name={choice}
                type="checkbox"
                checked={false}
                onChange={e =>
                  this.props.handleCheckboxChange(e, this.props.category)
                }
              />
              {choice}
            </label>
          </div>
        ))} */}
      </div>
    );
  }
}

export default Filter;
