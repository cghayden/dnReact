import React from "react";
import { Router, navigate } from "@reach/router";
import firebase from "firebase";
import base from "../../base";
import ParentNav from "./ParentNav";
import UserContext from "../UserContext";
import ParentIndex from "./ParentIndex";
import Routines from "./Routines";
import Competitions from "./Competitions";
import MyDancers from "./MyDancers";

class Parent extends React.Component {
  state = { user: {} };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // // if we get here, there is a user logged in, but what about when signout?
      !user
        ? navigate("../")
        : // there is a user... retrieve their data
          // this.loadUserData(user.uid);
          console.log("user");
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

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        <div>
          <h1> Parent's page </h1>
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

// fetchRoutines = (dancersRoutines, dancer, routines) => {
//   routines[dancer] = {};
//   const routineIds = Object.keys(dancersRoutines);
//   routineIds.map(id => {
//     base.fetch(`routines/${id}`, {
//       context: this,
//       then(data) {
//         routines[dancer][id] = data;
//       }
//     });
//   });
// };
