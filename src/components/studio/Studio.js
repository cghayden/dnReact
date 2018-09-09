import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { navigate } from "@reach/router";
import StudioNav from "./StudioNav";

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
        <StudioNav />
      </div>
    );
  }
}

export default Studio;
