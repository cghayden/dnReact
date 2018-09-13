import React, { Component } from "react";
import UserContext from "../UserContext";

class MyDancers extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {user => (
          <div>
            <h2>
              {user.name}
              's Dancers Info Here
            </h2>
            {console.log(user.dancers)}
            {user.dancers.map(dancer => {
              return <p key={dancer.firstname}>{dancer.firstname}</p>;
            })}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MyDancers;
