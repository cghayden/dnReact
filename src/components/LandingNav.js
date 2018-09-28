import React, { Fragment, Component } from "react";
import { Link } from "@reach/router";

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
      </Fragment>
    );
  }
}
export default LandingNav;
