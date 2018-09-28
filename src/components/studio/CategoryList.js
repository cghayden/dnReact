import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { firestore } from "../../firebase";

class CategoryList extends Component {
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

  addItemToCategory = async (category, item) => {
    const targetArray = `classCategories.${category}`;

    const studioRef = await firestore.collection("studios").doc(this.props.uid);
    studioRef.update({
      [targetArray]: firebase.firestore.FieldValue.arrayUnion(item)
    });
    this.setState({ newCategory: "" });
  };

  render() {
    const { items, category } = this.props;
    const { newCategory } = this.state;
    const disabled = newCategory.replace(/\s/g, "").length === 0;
    return (
      <div className="category-list">
        <section>
          <div className="list-header">
            <h2>{this.props.category}</h2>
          </div>
          <ul>
            {items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="list-footer">
            <label className="text-small">Add a new item</label>
            <input
              required
              title="this field is required"
              pattern="\S+"
              type="text"
              name="newCategory"
              value={this.state.newCategory}
              onChange={this.handleInputChange}
            />
            <button
              disabled={disabled}
              onClick={() =>
                this.addItemToCategory(category, this.state.newCategory)
              }
            >
              Add
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default CategoryList;
