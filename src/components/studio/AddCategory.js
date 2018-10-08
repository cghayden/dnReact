import React, { Component } from "react";
import "firebase/firestore";
import { firestore } from "../../firebase";

export default class AddCategory extends Component {
  state = {
    addCategory: ""
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  saveCategory = event => {
    const dbTarget = `classCategories.${this.state.addCategory}`;
    firestore
      .collection("studios")
      .doc(this.props.uid)
      .update({
        [dbTarget]: []
      })
      .then(function() {
        console.log("Document successfully updated!");
      });
  };

  render() {
    return (
      <form className="pv2" onSubmit={this.saveCategory}>
        <div className="">
          <label htmlFor="addCategory">Name of New Category:</label>
          <input
            id="addCategory"
            name="addCategory"
            onChange={this.handleInputChange}
            type="text"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
