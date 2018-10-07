import React, { Component } from "react";
// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import { firestore } from "../../firebase";

// import PropTypes from "prop-types";
import { navigate } from "@reach/router";

class AddDancerForm extends Component {
  // static propTypes = {
  //   studioId: PropTypes.string.isRequired
  // };

  state = {
    firstname: "",
    lastname: "",
    error: null
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  addDancerToStudio = () => {
    console.log("addDancerToStudio called");
  };

  addDancerDocRefToRoutine = async docRef => {
    console.log("addDancerDocReftoRoutine called");
  };

  addDancer = async event => {
    event.preventDefault();
    // const { firstname, lastname } = this.state;
    console.log("addDancer form submission called");
    navigate("../dancers");
  };

  render() {
    return (
      <div>
        <h1>Add a Dancer Form</h1>
        <form className="signup body" onSubmit={this.addDancer}>
          <input
            name="firstname"
            onChange={this.handleInputChange}
            type="text"
            placeholder="first name"
          />
          <input
            name="lastname"
            onChange={this.handleInputChange}
            type="text"
            placeholder="last name"
          />
          <button className="btn" type="submit">
            Save Dancer
          </button>
        </form>
      </div>
    );
  }
}
export default AddDancerForm;
