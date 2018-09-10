import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { firestore } from "../../firebase";

class AddDancerForm extends Component {
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

  addDancerToParent = id => {
    const parentRef = firestore.collection("parents").doc(this.props.parentId);
    parentRef
      .update({
        dancers: firebase.firestore.FieldValue.arrayUnion(id)
      })
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  addDancer = async event => {
    event.preventDefault();
    const { firstname, lastname } = this.state;
    await firestore
      .collection("dancers")
      .add({ firstname, lastname })
      .then(docRef => {
        console.log("doc written to dancer coll:", docRef.id);
        this.addDancerToParent(docRef.id);
      })
      .catch(error => {
        console.error("error", error);
        this.setState({ error });
      });
    console.log("submitting:", firstname, lastname);
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
          <button type="submit">Save Dancer</button>
        </form>
      </div>
    );
  }
}
export default AddDancerForm;
