import React from "react";
import firebase from "firebase";
import { navigate } from "@reach/router";

class SignOutButton extends React.Component {
  logout = async () => {
    console.log("logging out");
    await firebase.auth().signOut();
  };

  render() {
    return (
      <button type="button" onClick={this.logout}>
        Sign Out
      </button>
    );
  }
}

export default SignOutButton;
