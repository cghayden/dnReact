import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import SignOutButton from "./SignOutButton";
import { firestore } from "../firebase";

class LoginOrSignUp extends React.Component {
  state = {
    email: "",
    password: "",
    usertype: null,
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
    const userData = { name, email };
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

  login = async event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log(user.uid)) //not firing
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <div>
        <div>
          <SignOutButton />
          <h1>Create an Account</h1>
          {error && <p>{error.message}</p>}
          <form className="body" onSubmit={this.createAccount}>
            <div className="pb2">
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
              <button
                type="submit"
                disabled={this.state.usertype === null && !this.state.usertype}
              >
                Sign Up
              </button>
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
