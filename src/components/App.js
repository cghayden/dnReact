import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import firebase from "firebase";
import base from "../base";

// import AuthRoutes from "./AuthRoutes";
import UserContext from "./UserContext";

import LoginOrSignUp from "./LoginOrSignUp";
import UserTypeRouter from "./UserTypeRouter";

import Landing from "./Landing";
import Dancer from "./Dancer";
import Studio from "./Studio";
import AuthRouter from "./AuthRouter";
import GlobalNav from "./GlobalNav";
// import NotFound from "./NotFound";

class App extends React.Component {
  state = {
    userData: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userData: user });
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
