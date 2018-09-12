import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { navigate } from "@reach/router";

import StudioNav from "./StudioNav";
import { loadUserData, firestoreTests } from "../../scripts/helpers";

class Studio extends React.Component {
  state = {
    usertype: "studios",
    user: {},
    error: null
  };
  // if we get here, there is a user logged in, but what about when signout?
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        navigate("../");
      } else {
        loadUserData(user.uid, this.state.usertype)
          .then(user => this.setState({ user }))
          .catch(error => {
            this.setState({ error });
            console.log("error getting user data", error);
          });
        firestoreTests(user.uid, this.state.usertype);
      }
    });
  }

  render() {
    return (
      <div>
        <StudioNav />
        <h1>
          {this.state.user.name}
          's home page
        </h1>
      </div>
    );
  }
}

export default Studio;
