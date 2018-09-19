import React, { Component, Fragment } from "react";

import SignOutButton from "./SignOutButton";
import Login from "./Login";
import SignUp from "./SignUp";

class LoginOrSignUp extends Component {
  render() {
    return (
      <Fragment>
        <pre>
          <SignOutButton />
        </pre>
        <div className="content">
          <Login />
          <SignUp />
        </div>
      </Fragment>
    );
  }
}

export default LoginOrSignUp;
