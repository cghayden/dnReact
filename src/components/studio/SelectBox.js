import React, { Component } from "react";

export default class SelectBox extends Component {
  state = {
    selection: "Select..."
  };

  handleChange = event => {
    this.setState({ selection: event.target.value });
    this.props.onChange(event);
  };

  render() {
    const name = this.props.name;
    const id = `${name}Choices`;
    return (
      <div className="form-field">
        <label htmlFor={id}>
          {name}:{" "}
          <select
            id={id}
            value={this.state.selection}
            name={name}
            onChange={this.handleChange}
          >
            <option default value="Select..." disabled>
              {name} ...
            </option>
            <option value="">N/A</option>
            {this.props.choices.map(choice => (
              <option key={choice} value={`${choice}`}>
                {choice}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}
