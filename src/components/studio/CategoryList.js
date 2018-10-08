import React, { Component, Fragment } from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { firestore } from "../../firebase";
import { naturalCompare } from "../../scripts/helpers";
import Delete from "../svg/Delete";
import Edit from "../svg/Edit";

class CategoryList extends Component {
  state = {
    newItem: "",
    displayCategoryInput: false,
    newCategoryName: "New Name"
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  deleteCategory = async category => {
    console.log("delete", category);

    const studioRef = await firestore.collection("studios").doc(this.props.uid);
    const targetArray = `classCategories.${category}`;
    studioRef.update({
      [targetArray]: firebase.firestore.FieldValue.delete()
    });
  };

  deleteCategoryItem = async (category, item) => {
    const targetArray = `classCategories.${category}`;
    const studioRef = await firestore.collection("studios").doc(this.props.uid);
    studioRef.update({
      [targetArray]: firebase.firestore.FieldValue.arrayRemove(item)
    });

    // const newItems = [...this.props.items];
    // console.log("delete", item);
    // const pos = newItems.indexOf(item);
    // newItems.splice(pos, 1);
    // console.log("newItems", newItems);
  };

  addItemToCategory = async (category, item) => {
    const capitalizedItem = item[0].toUpperCase() + item.slice(1);
    const targetArray = `classCategories.${category}`;
    const studioRef = await firestore.collection("studios").doc(this.props.uid);
    studioRef.update({
      [targetArray]: firebase.firestore.FieldValue.arrayUnion(capitalizedItem)
    });
    this.setState({ newItem: "" });
  };

  toggleCategoryInput = () => {
    this.setState({
      displayCategoryInput: !this.state.displayCategoryInput
    });
  };

  saveNewCategoryName = async () => {
    console.log("clicked save");
    const oldCategoryName = this.props.category;
    const newCategoryName = this.state.newCategoryName;

    const dbTarget = `classCategories.${newCategoryName}`;
    await firestore
      .collection("studios")
      .doc(this.props.uid)
      .update({
        [dbTarget]: this.props.items
      })
      .then(function() {
        console.log("Document successfully updated!");
      });
    await this.deleteCategory(oldCategoryName);
    this.setState({
      displayCategoryInput: !this.state.displayCategoryInput
    });
  };

  render() {
    const { items, category } = this.props;
    items.sort(naturalCompare);
    const { newItem } = this.state;
    const disabled = newItem.replace(/\s/g, "").length === 0;
    return (
      <div className="category-list">
        <section>
          <div className="list-header">
            {this.state.displayCategoryInput ? (
              <Fragment>
                <input
                  pattern="\S+"
                  type="text"
                  name="newCategoryName"
                  value={this.state.newCategoryName}
                  onChange={this.handleInputChange}
                />
                <button onClick={this.saveNewCategoryName}>Save</button>
                <button onClick={this.toggleCategoryInput}>Cancel</button>
              </Fragment>
            ) : (
              <Fragment>
                <h2>{category}</h2>
                <button onClick={this.toggleCategoryInput}>
                  <Edit />
                </button>
              </Fragment>
            )}
          </div>
          <ul>
            {items.map(item => (
              <li key={item}>
                {item}
                <button
                  className="btn-naked"
                  onClick={() => this.deleteCategoryItem(category, item)}
                  item={item}
                  category={category}
                >
                  <Delete />
                </button>
              </li>
            ))}
          </ul>
          <div className="list-footer">
            <label className="text-small">Add a new item</label>
            <input
              required
              title="this field is required"
              pattern="\S+"
              type="text"
              name="newItem"
              value={this.state.newItem}
              onChange={this.handleInputChange}
            />
            <button
              className="btn"
              disabled={disabled}
              onClick={() =>
                this.addItemToCategory(category, this.state.newItem)
              }
            >
              Add
            </button>
            <button onClick={() => this.deleteCategory(category)}>
              Delete Entire {category} Category
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default CategoryList;
