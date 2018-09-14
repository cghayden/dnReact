import React, { Component } from "react";
import UserContext from "../UserContext";

class ParentIndex extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => {
          return (
            <div>
              <h2>Parent Home</h2>
              {user.name}
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ParentIndex;
