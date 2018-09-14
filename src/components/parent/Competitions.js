import React from "react";
import CompetitionCard from "./CompetitionCard";
import UserContext from "../UserContext";
import ScrollUp from "../ScrollUp";

class Competitions extends React.Component {
  render() {
    return (
      <ScrollUp>
        <UserContext.Consumer>
          {user => (
            <div className="content">
              <h2>
                {user.profile.name}
                's Competitions
              </h2>
              <CompetitionCard />
            </div>
          )}
        </UserContext.Consumer>
      </ScrollUp>
    );
  }
}

export default Competitions;
