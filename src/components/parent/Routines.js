import React from "react";
import DanceCard from "./DanceCard";
import UserContext from "../UserContext";
import ScrollUp from "../ScrollUp";

class Routines extends React.Component {
  render() {
    return (
      <ScrollUp>
        <UserContext.Consumer>
          {user => (
            <div className="content">
              <h1>
                {user.profile.name}
                's routines
              </h1>
              {/*render a DanceCard for each dance*/}
              <DanceCard />
            </div>
          )}
        </UserContext.Consumer>
      </ScrollUp>
    );
  }
}

export default Routines;
