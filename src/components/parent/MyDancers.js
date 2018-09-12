import React, { Component } from "react";
import UserContext from "../UserContext";

class MyDancers extends Component {
  state = { dancers: [{ firstname: "addie" }, { firstname: "ella" }] };
  render() {
    // return (
    //   <div>
    //     {this.state.dancers.map(dancer => (
    //       <p>{dancer.firstname}</p>
    //     ))}
    //   </div>
    // );
    return (
      <UserContext.Consumer>
        {user => (
          <div>
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
