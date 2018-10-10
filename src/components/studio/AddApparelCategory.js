import React, { Component } from "react";
import "firebase/firestore";
import { firestore } from "../../firebase";

export default class AddApparelCategory extends Component {
  state = {
    newApparelCategory: ""
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  saveCategory = async event => {
    const addApparelCategoryButton = document.getElementById(
      "addApparelCategory"
    );
    event.preventDefault();
    const dbTarget = `apparelCategories.${this.state.newCategory}`;
    await firestore
      .collection("studios")
      .doc(this.props.uid)
      .update({
        [dbTarget]: []
      })
      .then(function() {
        addApparelCategoryButton.click();
      })
      .catch(error => {
        this.setState(error);
        console.log(error);
      });
  };

  render() {
    return (
      <form className="pv2" onSubmit={event => this.saveCategory(event)}>
        <div className="">
          <label htmlFor="newApparelCategory">
            Name of New ApparelCategories Category:
          </label>
          <input
            id="newApparelCategory"
            name="newApparelCategory"
            onChange={this.handleInputChange}
            type="text"
          />
          <input type="submit" value="Submit" />
          {this.state.error && <p>this.state.error</p>}
        </div>
      </form>
    );
  }
}
