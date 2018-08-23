import React from "react";
import { Router, Link, navigate } from "@reach/router";
import firebase from "firebase";
import base from "../../base";
import DancerNav from "./DancerNav";
import ParentHome from "./ParentHome";
import Routines from "./Routines";
import Competitions from "./Competitions";

class Parent extends React.Component {
  state = {
    userData: null,
    dancers: {}
  };

  // if we get here, there is a user logged in, but what about when signout?
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        navigate("../");
      }
    });
  }

  loadUserData = async uid => {
    const user = await base.fetch(`users/${this.props.uid}`, {
      context: this
    });
    if (user.dancers) {
      const dancerKeys = Object.keys(user.dancers);
      const dancers = {};
      const routines = {};
      dancerKeys.map(key => {
        base.fetch(`dancers/${key}`, {
          context: this,
          then(data) {
            dancers[key] = data;
            this.fetchRoutines(data.routines, data.name, routines);
          }
        });
      });
      this.setState({ dancers, routines });
    }
    this.setState({ user });
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
        <DancerNav />
        <Router>
          <ParentHome path="/:uid" />
          <Routines path="/routines" />
        </Router>
        <h1> Dancer's home page </h1>
        <Link to="/routines">Routines</Link>
        <Link to="/competitions">Competitions</Link>
      </div>
    );
  }
}

export default Parent;
