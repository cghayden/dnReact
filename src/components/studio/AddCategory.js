import React, { Component } from "react";
import "firebase/firestore";
import { firestore } from "../../firebase";

export default class AddCategory extends Component {
  state = {
    newCategory: ""
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
    const addCategoryButton = document.getElementById(`addCategory`);
    event.preventDefault();
    const dbTarget = `${this.props.group}.${this.state.newCategory}`;
    await firestore
      .collection("studios")
      .doc(this.props.uid)
      .update({
        [dbTarget]: []
      })
      .then(function() {
        addCategoryButton.click();
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
          <label htmlFor="newCategory">Name of New Category:</label>
          <input
            name="newCategory"
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
