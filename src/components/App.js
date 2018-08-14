import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import firebase from "firebase";
import base from "../base";

// import AuthRoutes from "./AuthRoutes";
import Landing from "./Landing";
import Dancer from "./Dancer";
import Studio from "./Studio";
import AuthRouter from "./AuthRouter";
import GlobalNav from "./GlobalNav";
// import NotFound from "./NotFound";

class App extends React.Component {
  state = {
    userType: null,
    userData: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({ userType: null, userData: null });
      } else {
        base.fetch(`users/${user.uid}`, {
          context: this,
          then(userData) {
            console.log(userData);
            this.setState({
              userType: userData.userType,
              userData
            });
          }
        });
      }
    });
  }

  render() {
    if (!this.state.userData) {
      return <AuthRouter />;
    }
    if (this.state.userType === "user") {
      return <Dancer user={this.state.userData} />;
    }
    if (this.state.userType === "studio") {
      return <Studio />;
    }
  }
}

export default App;
