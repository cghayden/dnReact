import React from "react";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { Router, navigate } from "@reach/router";

import ParentNav from "./ParentNav";
import UserContext from "../UserContext";
import ParentIndex from "./ParentIndex";
import Routines from "./Routines";
import Competitions from "./Competitions";
import MyDancers from "./MyDancers";
import Actions from "./Actions";

import { loadUserData } from "../../scripts/helpers";

class Parent extends React.Component {
  state = {
    user: {},
    error: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // // if we get here, a user is logged in; when signout back out to Landing
      !user
        ? navigate("../")
        : loadUserData(user.uid, "parents")
            .then(user => this.setState({ user }))
            .catch(error => {
              this.setState({ error });
              console.log("error getting user data", error);
            });
    });
  }

  render() {
    // const user = { name: "sample name" };
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
            <Actions path="actions/*" />
          </Router>
        </div>
      </UserContext.Provider>
    );
  }
}

export default Parent;

/*  TODO
    add a dancer - write ref

    link / search for a studio or retailer by name or location
    
    user.dancers:
      forEach routine in dancer, get routine info
      
  */
