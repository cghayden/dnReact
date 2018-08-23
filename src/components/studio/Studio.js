import React from "react";
import firebase from "firebase";
import SignOutButton from "../SignOutButton";
import { navigate } from "@reach/router";
class Studio extends React.Component {
  // if we get here, there is a user logged in, but what about when signout?
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        navigate("../");
      }
    });
  }
  render() {
    return (
      <div>
        <h1> Studio Home Page </h1>
        <SignOutButton />
      </div>
    );
  }
}

export default Studio;
