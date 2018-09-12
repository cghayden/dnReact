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

import { loadUserData } from "../../scripts/helpers";

class Parent extends React.Component {
  state = {
    user: {},
    usertype: "parents",
    error: null,
    studio: {},
    dancers: []
  };

  getStudioData = () => {
    const docRef = this.state.user.studio;
    // console.log("studio:", this.state.user.studio);
    docRef.get().then(doc => this.setState({ studio: doc.data() }));
  };

  getDancerData = () => {
    const dancers = this.state.user.dancers;
    const dancerData = [];
    for (const docRef of dancers) {
      docRef.get().then(doc => {
        dancerData.push(doc.data());
      });
    }
    this.setState({ dancers: dancerData });
    // console.log(dancers);
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // // if we get here, a user is logged in; when signout back out to Landing
      !user
        ? navigate("../")
        : loadUserData(user.uid, this.state.usertype)
            .then(user => {
              this.setState({ user });
              this.getStudioData();
              this.getDancerData();
            })
            .catch(error => {
              this.setState({ error });
              console.log("error getting user data", error);
            });
    });
  }

  render() {
    const { error } = this.state;
    const user = {
      profile: this.state.user,
      dancers: this.state.dancers,
      studio: this.state.studio
    };

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
    add a dancer

    link / search for a studio by name or location
    
    user.dancers ? get dancer info
      forEach routine in dancer, get routine info
    
    search for retail by name or location
  
  */
