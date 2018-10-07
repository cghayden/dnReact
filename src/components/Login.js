import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import ScrollUp from "./ScrollUp";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  login = async event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => console.log(user.uid)) //not firing
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <ScrollUp>
        <div className="content">
          <div className="container container-single login">
            <form className="form-control" onSubmit={this.login}>
              <div className="form-header">
                <h2>Sign in</h2>
              </div>
              {error && <p>{error.message}</p>}
              <div>
                <label htmlFor="email-login">Email</label>
                <input
                  id="email-login"
                  name="email"
                  onChange={this.handleInputChange}
                  type="email"
                />
              </div>
              <div>
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                />
              </div>
              <div className="form-footer">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </ScrollUp>
    );
  }
}

export default Login;
