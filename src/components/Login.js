import React from "react";
import firebase from "firebase";

class Login extends React.Component {
  state = { email: "", password: "", uid: null };

  login = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.props.history.push("/"))
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to Dancer Notes</h1>
        <h1>Sign in</h1>
        <form className="signup body" onSubmit={this.login}>
          <input
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
