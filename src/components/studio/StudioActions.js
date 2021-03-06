import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import AddDancerForm from "./AddDancerForm";
import UserContext from "../UserContext";
import EditCatalog from "./EditCatalog";
import CreateClass from "./CreateClass";

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
              <Link className="mh5" to="editClassCatalog">
                Edit Class Catalog
              </Link>
              <Link className="mh5" to="classes-add">
                Create a New Class
              </Link>
            </nav>
            <Router>
              <AddDancerForm path="addDancer" />
              <EditCatalog path="editClassCatalog" />
              <CreateClass path="classes-add" uid={user.uid} />
            </Router>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default StudioActions;
