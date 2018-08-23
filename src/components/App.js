import React from "react";
import firebase from "firebase";
import base from "../base";

import UserContext from "./UserContext";

import LoginOrSignUp from "./LoginOrSignUp";
import UserTypeRouter from "./UserTypeRouter";

class App extends React.Component {
  state = {
    userData: null
  };

  getUserData = async uid => {
    const userData = await base.fetch(`users/${uid}`, {
      context: this
    });
    console.log(userData);
    this.setState({ userData });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);
        // look up in user in database and retieve data
        this.getUserData(user.uid);
        // this.setState({ userData: user });
      } else {
        this.setState({ userData: null });
      }
    });
  }

  render() {
    const { userData } = this.state;

    if (!this.state.userData) {
      return <LoginOrSignUp />;
    }
    return (
      <UserContext.Provider value={userData}>
        <UserTypeRouter />
      </UserContext.Provider>
    );
  }
}

export default App;
