import React, { Component } from "react";
import SelectBox from "./SelectBox";
import { Link } from "@reach/router";

import * as firebase from "firebase/app";
import "firebase/firestore";
import { firestore } from "../../firebase";

export default class CreateClass extends Component {
  state = {
    error: null
  };

  handleSelectBoxChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  saveDance = async event => {
    // event.preventDefault();
    console.log("create a dance form submitted");
    const { level = "", style = "", age = "", name = "" } = this.state;
    const newDance = {
      level,
      style,
      age,
      name
    };
    // save in collection of classes...
    await firestore
      .collection("studios")
      .doc(this.props.uid)
      .collection("classes")
      .doc()
      .set(newDance)
      .then(() => {
        console.log("Collection successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
        this.setState({ error });
      });
    //save class as an object in array of 'classes'
    const studioRef = await firestore.collection("studios").doc(this.props.uid);
    await studioRef.update({
      classes: firebase.firestore.FieldValue.arrayUnion(newDance)
    });

    this.setState({});
  };

  customizeSelectBoxes = level => {
    if (level === "rec") {
      return (
        <SelectBox
          name="ages"
          choices={this.props.categories.ages}
          onChange={this.handleSelectBoxChange}
        />
      );
    }
  };

  editCategories = () => {};

  render() {
    return this.props.categories ? (
      <div className="container container-single">
        <form className="form-control" onSubmit={this.saveDance}>
          <div className="form-header">
            <h2>Create a new class</h2>
            <p>category</p>
            {this.state.error && <h5>{this.state.error}</h5>}
          </div>
          <div className="classSelectors">
            <div className="form-field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={this.handleSelectBoxChange}
              />
            </div>
            {/* <SelectBox
              name="levels"
              choices={this.props.categories.levels}
              onChange={this.handleSelectBoxChange}
            />
            {this.customizeSelectBoxes(this.state.level)}
            <SelectBox
              name="styles"
              choices={this.props.categories.styles}
              onChange={this.handleSelectBoxChange}
            /> */}

            {this.props.categories &&
              Object.keys(this.props.categories).map(cat => (
                <SelectBox
                  key={cat}
                  name={cat}
                  choices={this.props.categories[cat]}
                  onChange={this.handleSelectBoxChange}
                />
              ))}
            <div className="form-field" />
          </div>
          <div className="form-footer">
            <button className="btn" onClick={() => this.handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    ) : (
      <h2>Loading...</h2>
    );
  }
}
