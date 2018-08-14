import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import firebase from "firebase";
import base from "../base";
import DancerNav from "./dancer/DancerNav";
import Routines from "./dancer/Routines";
import Competitions from "./dancer/Competitions";

class Dancer extends React.Component {
  state = {
    dancers: {}
  };

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

  // componentDidMount() {
  //   this.loadUserData(this.props.uid);
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <DancerNav />
          <h1> Dancer's home page </h1>
          <Route exact path="/routines" component={Routines} />
          <Route exact path="/competitions" component={Competitions} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Dancer;
