import React, { Component } from "react";
import { Router } from "@reach/router";
import AddDancerForm from "./AddDancerForm";
import UserContext from "../UserContext";
// import { navigate } from "@reach/router/lib/history";
import ClassCategories from "./ClassCategories";
import { Link } from "@reach/router";
class StudioActions extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div className="content">
            <h1>Actions</h1>
            <nav className="subNav mv2">
              <Link className="mh5" to="addDancer">
                Add a Dancer
              </Link>
              <Link className="mh5" to="classes-Categories">
                Edit Class Catalog
              </Link>
            </nav>
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
