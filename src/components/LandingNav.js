import React, { Fragment, Component } from "react";
import { Link, Router } from "@reach/router";
import Login from "./Login";
import CreateParent from "./CreateParent";
import CreateStudio from "./CreateStudio";

class LandingNav extends Component {
  render() {
    return (
      <Fragment>
        <nav className="nav">
          <Link to="login">
            <button>Login</button>
          </Link>
          <Link to="createParent">
            <button>Create a Parent Account</button>
          </Link>
          <Link to="createStudio">
            <button>Create a Studio Account</button>
          </Link>
        </nav>

        <Router>
          <Login className="content" path="login" />
          <CreateParent path="createParent" />
          <CreateStudio path="createStudio" />
        </Router>
      </Fragment>
    );
  }
}
export default LandingNav;
