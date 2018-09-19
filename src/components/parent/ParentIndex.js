import React, { Component } from "react";
import UserContext from "../UserContext";

class ParentIndex extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => {
          return (
            <div className="pv2">
              <h2>Parent Home</h2>
              <p className="pv2">{user.name}</p>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ParentIndex;
