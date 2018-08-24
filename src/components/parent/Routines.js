import React from "react";
import DanceCard from "./DanceCard";

class Routines extends React.Component {
  render() {
    return (
      <div className="content">
        {/*render a DanceCard for each dance*/}
        <DanceCard />
      </div>
    );
  }
}

export default Routines;
