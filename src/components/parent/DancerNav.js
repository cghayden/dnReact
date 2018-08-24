import React from "react";
import { Router, Link } from "@reach/router";
import SignOutButton from "../SignOutButton";
import Routines from "./Routines";
import Competitions from "./Competitions";
import ParentHome from "./ParentHome";

const DancerNav = props => (
  <div>
    <div className="dancerNav">
      {/*for each dancer, make an icon, active or not, onClick = setState to include that dancer's info */}
      <p className="icon">A</p>
      <p className="icon icon-active">E</p>
      <SignOutButton />
    </div>
    <nav>
      <Link to="routines">Routines</Link>
      <Link to="competitions">Competitions</Link>
    </nav>
    <Router>
      <ParentHome path="/" />
      <Routines path="routines" />
      <Competitions path="competitions" />
    </Router>
  </div>
);

export default DancerNav;
