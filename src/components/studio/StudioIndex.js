import React, { Component } from "react";
import UserContext from "../UserContext";

class StudioIndex extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div>
            <h2>
              {user.name}
              's Home Page
            </h2>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default StudioIndex;
