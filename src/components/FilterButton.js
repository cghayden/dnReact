import React, { Component } from "react";

export default class FilterButton extends Component {
  state = {
    disabled: false
  };

  handleClick = () => {
    this.setState({ disabled: !this.state.disabled });
  };

  render() {
    const disabled = this.state.disabled;
    const id = `${this.props.text}`;
    return (
      <li>
        <button
          className="filterButton"
          id={id}
          disabled={disabled}
          onClick={e => this.props.handleFilterButton(e, this.props.category)}
        >
          {this.props.text}
        </button>
      </li>
    );
  }
}
