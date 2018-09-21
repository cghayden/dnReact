import React, { Component } from "react";
import { Router } from "@reach/router";
import AddDancerForm from "./AddDancerForm";
import UserContext from "../UserContext";
// import { navigate } from "@reach/router/lib/history";

class StudioActions extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div>
            <button onClick={() => this.props.navigate("./addDancer")}>
              Add a Dancer
            </button>
            <Router>
              <AddDancerForm path="addDancer" parentId={user.uid} />
            </Router>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default StudioActions;
