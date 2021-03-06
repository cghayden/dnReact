import React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firestore } from "../../firebase";

import { Router, navigate } from "@reach/router";

import { loadStudioData } from "../../scripts/helpers";
import UserContext from "../UserContext";

import StudioNav from "./StudioNav";
import StudioIndex from "./StudioIndex";
import Classes from "./Classes";
import Competitions from "./Competitions";
import Dancers from "./Dancers";
import StudioActions from "./StudioActions";

class Studio extends React.Component {
  state = {
    usertype: "studios",
    user: null,
    error: null
  };
  // if we get here, there is a user logged in, but what about when signout?
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        navigate("../");
      } else {
        const studioRef = firestore.collection("studios").doc(user.uid);

        firestore
          .collection("studios")
          .doc(user.uid)
          .onSnapshot(doc => {
            loadStudioData(studioRef)
              .then(user => this.setState({ user }))
              .catch(error => {
                this.setState({ error });
                console.log("error getting user data", error);
              });
          });
      }
    });
  }

  render() {
    const { user, error } = this.state;
    return this.state.user ? (
      <React.StrictMode>
        <UserContext.Provider value={user}>
          <div>
            <h3> {user.name} </h3>
            {error && <p>{error.message}</p>}
            <StudioNav />
            <Router>
              <StudioIndex user={this.state.user} path="/" />
              <Dancers path="dancers" />
              <Classes path="classes" classes={this.state.user.classes} />
              <Competitions path="competitions" />
              <StudioActions path="actions/*" />
            </Router>
          </div>
        </UserContext.Provider>
      </React.StrictMode>
    ) : null;
  }
}

export default Studio;
