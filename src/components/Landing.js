import React, { Component, Fragment } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firestore } from "../firebase";
import { Router, navigate } from "@reach/router";
import LandingNav from "./LandingNav";
import Login from "./Login";
import CreateParent from "./CreateParent";
import CreateStudio from "./CreateStudio";
import LandingIndex from "./LandingIndex";
// import LoginOrSignUp from "./LoginOrSignUp";

class Landing extends Component {
  state = {
    userData: null
  };

  routeByUserType = async uid => {
    const userRef = await firestore.collection("users").doc(uid);
    userRef
      .get()
      .then(doc => {
        const type = doc.data().usertype;
        navigate(`/${type}`);
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // const usertype = localStorage.getItem("dancerNotesUserType");
        // look up in user in database to get type for routing
        this.routeByUserType(user.uid);
      }
    });
  }

  render() {
    return (
      <Fragment>
        <LandingNav />

        <Router>
          <LandingIndex path="/" />
          <Login path="login" />
          <CreateParent path="createParent" />
          <CreateStudio path="createStudio" />
        </Router>
      </Fragment>
    );
  }
}

export default Landing;
