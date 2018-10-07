import React, { Component } from "react";
import { navigate } from "@reach/router/lib/history";
import { Link } from "@reach/router";

export default class SelectBox extends Component {
  state = {
    selection: "Select..."
  };

  handleChange = event => {
    this.setState({ selection: event.target.value });
    this.props.onChange(event);
  };

  // editCategory = (event, category) => {
  //   event.preventDefault();
  //   navigate("/studio/actions/EditCategory", { category });
  // };

  render() {
    const name = this.props.name.slice(0, -1);
    return (
      <div className="form-field">
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
        {/* <button className="btn" onClick={e => this.editCategory(e, this.props.name)}>
          Edit this Category
        </button> */}
        <Link
          to="../EditCategory"
          state={{
            category: this.props.name,
            choices: this.props.choices
          }}
        >
          edit category
        </Link>
      </div>
    );
  }
}
