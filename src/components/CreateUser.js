import React from "react";
import firebase from "firebase";

import base, { firebaseApp } from "../base";

class CreateUser extends React.Component {
  state = { name: "", email: "", password: "" };

  createAccount = async event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const name = this.state.name;
    const userType = "u";
    //1. register user  -> firebase
    await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        console.error(error);
      });
    // 2. if success, post new user to firebase and set localStorage dnid
    const user = await firebase.auth().currentUser;
    const dnid = `${userType}${Date.now()}`;
    await base.post(`users/${user.uid}/name`, {
      data: name
    });
    await base.post(`users/${user.uid}/dnid`, {
      data: dnid
    });
    localStorage.setItem("dnid", dnid);
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h1>Create a User Account</h1>
        <form className="signup body" onSubmit={this.createAccount}>
          <input
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
