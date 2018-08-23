import React from "react";
import SignOutButton from "../SignOutButton";

const DancerNav = props => (
  <div>
    <div className="dancerNav">
      {/*for each dancer, make an icon, active or not*/}
      <p className="icon">A</p>
      <p className="icon icon-active">E</p>
      <SignOutButton />
    </div>
  </div>
);

export default DancerNav;
