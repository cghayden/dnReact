import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import AddDancerForm from "./AddDancerForm";
import UserContext from "../UserContext";

class Actions extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div>
            <ul>
              <li>
                <Link to="addDancer">
                  Add A Dancer To {user.name}
                  's Account
                </Link>
              </li>
            </ul>

            <Router>
              <AddDancerForm path="addDancer" parentId={user.uid} />
            </Router>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Actions;
