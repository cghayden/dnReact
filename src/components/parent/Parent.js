import React from "react";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firestore } from "../../firebase";

import { Router, navigate } from "@reach/router";

import ParentNav from "./ParentNav";
import UserContext from "../UserContext";
import ParentIndex from "./ParentIndex";
import Routines from "./Routines";
import Competitions from "./Competitions";
import MyDancers from "./MyDancers";

import { loadUserData } from "../../scripts/helpers";

class Parent extends React.Component {
  state = {
    user: {},
    usertype: "parents",
    error: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // // if we get here, a user is logged in; when signout back out to Landing
      !user
        ? navigate("../")
        : loadUserData(user.uid, this.state.usertype)
            .then(user => this.setState({ user }))
            .catch(error => {
              this.setState({ error });
              console.log("error getting user data", error);
            });
    });
  }

  render() {
    const { user, error } = this.state;

    return (
      <UserContext.Provider value={user}>
        <div>
          <h1> Parent's page </h1>
          {error && <p>{error.message}</p>}
          <ParentNav />

          <Router>
            <ParentIndex path="/" />
            <Routines path="routines" />
            <Competitions path="competitions" />
            <MyDancers path="dancers" />
          </Router>
        </div>
      </UserContext.Provider>
    );
  }
}

export default Parent;

/*  TODO
    add a dancer

    link / search for a studio by name or location
    
    user.dancers ? get dancer info
      forEach routine in dancer, get routine info
    
    search for retail by name or location
  
  */
