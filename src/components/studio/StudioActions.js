import React, { Component } from "react";
import { Router } from "@reach/router";
import AddDancerForm from "./AddDancerForm";
import UserContext from "../UserContext";
// import { navigate } from "@reach/router/lib/history";
import ClassCategories from "./ClassCategories";
class StudioActions extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div>
            <button onClick={() => this.props.navigate("./addDancer")}>
              Add a Dancer
            </button>
            <button onClick={() => this.props.navigate("./classes-Categories")}>
              Edit Class Catalog
            </button>
            <Router>
              <AddDancerForm path="addDancer" />
              <ClassCategories path="classes-Categories" />
            </Router>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default StudioActions;
