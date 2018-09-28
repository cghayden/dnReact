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
    const name = this.props.name.slice(0, -1);
    return (
      <div>
        <label>
          {name}
          <select
            id=""
            value={this.state.selection}
            name={name}
            onChange={this.handleChange}
          >
            <option default value="Select..." disabled>
              Select Class {name}
            </option>
            {this.props.choices.map(choice => (
              <option key={choice} value={`${choice}`}>
                {choice}
              </option>
            ))}
            {/* <option value="rec">Rec</option>
            <option value="teen company">Teen Company</option>
            <option value="star">Star Company</option> */}
          </select>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </div>
    );
  }
}
