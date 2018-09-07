import React, { Component } from "react";
import UserContext from "../UserContext";

class MyDancers extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <h2>
            {user.name}
            's Dancers Info Here
          </h2>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MyDancers;
