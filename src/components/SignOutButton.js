import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

class SignOutButton extends React.Component {
  logout = async () => {
    console.log("logging out");
    localStorage.removeItem("dancerNotesUserType");
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
