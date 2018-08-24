import React from "react";
import firebase from "firebase";

import { firebaseApp } from "../base";

class LoginOrSignUp extends React.Component {
  state = {
    email: "",
    password: "",
    userType: null,
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

  handleTypeChange = radioEvent => {
    this.setState({
      userType: radioEvent.target.value
    });
  };

  createAccount = async event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const userType = this.state.userType;
    const name = this.state.name;
    //1. register user  -> firebase
    await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.writeUserData(user.uid, userType, name, email))
      .catch(error => {
        // Handle Errors here.
        console.error(error);
        this.setState({ error });
      });
    // localStorage.setItem("dnid", dnid);
  };

  writeUserData = (userId, userType, name, email) => {
    firebase
      .database()
      .ref(`users/${userId}`)
      .set({
        userType,
        name,
        email
      });
  };

  login = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        console.log(error);
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <div>
        <div>
          <h1>Create an Account</h1>
          {error && <p>{error.message}</p>}
          <form className="body" onSubmit={this.createAccount}>
            <div className="pb2">
              <input
                type="radio"
                name="userType"
                id="parentRadio"
                value="parent"
                checked={this.state.userType === "parent"}
                onChange={this.handleTypeChange}
              />
              <label className="pl2 pr5" htmlFor="parentRadio">
                Parent
              </label>
              <input
                type="radio"
                name="userType"
                id="studioRadio"
                value="studio"
                checked={this.state.userType === "studio"}
                onChange={this.handleTypeChange}
              />
              <label className="pl1 pr5" htmlFor="studioRadio">
                Studio
              </label>
            </div>
            <div className="signup">
              <input
                type="text"
                name="name"
                onChange={this.handleInputChange}
                placeholder="name"
              />
              <input
                name="email"
                type="email"
                onChange={this.handleInputChange}
                placeholder="email"
              />
              <input
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="password"
              />
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
        <div>
          <h1>Sign in</h1>
          {error && <p>{error.message}</p>}
          <form className="signup body" onSubmit={this.login}>
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginOrSignUp;
