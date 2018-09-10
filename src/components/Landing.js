import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firestore } from "../firebase";
import { navigate } from "@reach/router";

import LoginOrSignUp from "./LoginOrSignUp";

class App extends React.Component {
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
        // console.log("landing mount authchange", "usertype= ", usertype);
        // look up in user in database to get type for routing
        this.routeByUserType(user.uid);
      }
    });
  }

  render() {
    return <LoginOrSignUp />;
  }
}

export default App;
