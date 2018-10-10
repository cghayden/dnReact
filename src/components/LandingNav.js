import React, { Fragment, Component } from "react";
import { Link } from "@reach/router";

class LandingNav extends Component {
  render() {
    return (
      <Fragment>
        <nav className="nav">
          <Link to="login">
            <button className="btn">Login</button>
          </Link>
          <Link to="createParent">
            <button className="btn">Create a Parent Account</button>
          </Link>
          <Link to="createStudio">
            <button className="btn">Create a Studio Account</button>
          </Link>
        </nav>
      </Fragment>
    );
  }
}
export default LandingNav;
