import React from "react";
import firebase from "firebase";
import base from "../base";
import { navigate } from "@reach/router";

import UserContext from "./UserContext";

import LoginOrSignUp from "./LoginOrSignUp";

class App extends React.Component {
  state = {
    userData: null
  };

  getUserData = async uid => {
    const userType = await base.fetch(`users/${uid}/userType`, {
      context: this
    });
    console.log(userType);
    navigate(`/${userType}/${uid}`);
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // look up in user in database and retieve data
        this.getUserData(user.uid);
        // navigate(`/parent`);
      }
    });
  }

  render() {
    return (
      <LoginOrSignUp />
      // <UserContext.Provider value={userData}>
      //   <UserTypeRouter />
      // </UserContext.Provider>
    );
  }
}

export default App;
