import React from "react";
import { navigate } from "@reach/router";
import firebase from "firebase";
import base from "../../base";
import ParentNav from "./ParentNav";

class Parent extends React.Component {
  state = {};

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // // if we get here, there is a user logged in, but what about when signout?
      !user
        ? navigate("../")
        : // there is a user... retrieve their data
          this.loadUserData(user.uid);
    });
  }

  loadUserData = async uid => {
    const user = await base.fetch(`users/${uid}`, {
      context: this
    });
    this.setState({ user });
    // if (user.dancers) {
    //   const dancerKeys = Object.keys(user.dancers);
    //   const dancers = {};
    //   const routines = {};
    //   dancerKeys.map(key => {
    //     base.fetch(`dancers/${key}`, {
    //       context: this,
    //       then(data) {
    //         dancers[key] = data;
    //         this.fetchRoutines(data.routines, data.name, routines);
    //       }
    //     });
    //   });
    //   this.setState({ dancers, routines });
    // }
  };

  fetchRoutines = (dancersRoutines, dancer, routines) => {
    routines[dancer] = {};
    const routineIds = Object.keys(dancersRoutines);
    routineIds.map(id => {
      base.fetch(`routines/${id}`, {
        context: this,
        then(data) {
          routines[dancer][id] = data;
        }
      });
    });
  };

  render() {
    return (
      <div>
        <h1> Parent's page </h1>
        <ParentNav />
        {/* Can add router here and everything above will be persistent */}
      </div>
    );
  }
}

export default Parent;
