import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firestore } from "../firebase";

class SignUp extends Component {
  state = {
    error: null,
    name: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleTypeChange = radioEvent => {
    this.setState({
      usertype: radioEvent.target.value
    });
  };

  createAccount = async event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const usertype = this.state.usertype;
    const name = this.state.name;
    //1. register user  -> firebase
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.writeUserType(user.user.uid, usertype, name, email);
        this.writeUserData(user.user.uid, usertype, name, email);
        localStorage.setItem("dancerNotesUserType", usertype);
      })
      .catch(error => {
        // Handle Errors here.
        console.error(error);
        this.setState({ error });
      });
  };

  writeUserType = (uid, usertype, name, email) => {
    const userData = { name, email, usertype, uid };
    firestore
      .collection(`users`)
      .doc(uid)
      .set(userData)
      .then(function(docRef) {
        console.log("Document in users: ");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  writeUserData = (uid, usertype, name, email) => {
    const userData = { name, email, uid };
    firestore
      .collection(`${usertype}s`)
      .doc(uid)
      .set(userData)
      .then(function(docRef) {
        console.log(`Document written in ${usertype}s`);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="form-control">
        <form onSubmit={this.createAccount}>
          <h1 className="pb3">Create an Account</h1>
          {error && <p>{error.message}</p>}
          <fieldset>
            <legend>
              <p>UserType</p>
            </legend>
            <div className="fieldset-body">
              <div>
                <input
                  type="radio"
                  name="usertype"
                  id="parentRadio"
                  value="parent"
                  checked={this.state.usertype === "parent"}
                  onChange={this.handleTypeChange}
                />
                <label className="pl2 pr5" htmlFor="parentRadio">
                  Parent
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="usertype"
                  id="studioRadio"
                  value="studio"
                  checked={this.state.usertype === "studio"}
                  onChange={this.handleTypeChange}
                />
                <label className="pl1 pr5" htmlFor="studioRadio">
                  Studio
                </label>
              </div>
            </div>
          </fieldset>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleInputChange} />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              onChange={this.handleInputChange}
              type="password"
            />
          </div>

          <div className="form-footer">
            <button
              type="submit"
              disabled={this.state.usertype === null && !this.state.usertype}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
