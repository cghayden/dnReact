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
import Actions from "./Actions";
import Sketchpad from "./Sketchpad";

import { loadParentData } from "../../scripts/helpers";

class Parent extends React.Component {
  state = {
    user: {},
    error: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // // if we get here, a user is logged in; when signout back out to Landing
      if (!user) {
        navigate("../");
      } else {
        const docRef = firestore.collection("parents").doc(user.uid);

        // loadParentData(docRef)
        //   .then(user => this.setState({ user }))
        //   .catch(error => {
        //     this.setState({ error });
        //     console.log("error getting user data", error);
        //   });

        firestore
          .collection("parents")
          .doc(user.uid)
          .onSnapshot(doc => {
            console.log("Current data: ", doc.data());
            loadParentData(docRef)
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
            <Sketchpad path="sketchpad" />
          </Router>
        </div>
      </UserContext.Provider>
    );
  }
}

export default Parent;

/*  TODO

    link / search for a studio or retailer by name or location
    
    user.dancers:
      forEach routine in dancer, get routine info
      
  */
