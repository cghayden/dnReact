import React, { Component } from "react";
import UserContext from "../UserContext";
import { dump, singleFilter } from "../../scripts/helpers";

class StudioIndex extends Component {
  render() {
    if (this.props.user.classes) {
      const filter = singleFilter(this.props.user.classes, {
        category: "Style",
        searchItem: "Tap"
      });
      console.log(this.props.user.classes);
      console.log("filter", filter);
    }

    return (
      <UserContext.Consumer>
        {user => (
          <div>
            <h2>
              {user.name}
              's Home Page
            </h2>
            <div>{dump(user.dances)}</div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default StudioIndex;
