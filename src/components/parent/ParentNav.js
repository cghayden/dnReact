import React from "react";
import { Router, Link } from "@reach/router";
import SignOutButton from "../SignOutButton";
import Routines from "./Routines";
import Competitions from "./Competitions";
import ParentIndex from "./ParentIndex";

const ParentNav = props => (
  <div>
    <div className="parentNav">
      {/*for each dancer, make an icon, active or not, onClick = setState to include that dancer's info */}
      <p className="icon">A</p>
      <p className="icon icon-active">E</p>
      <SignOutButton />
    </div>
    <nav>
      <Link to="./">Home</Link>
      <Link to="routines">Routines</Link>
      <Link to="competitions">Competitions</Link>
    </nav>
    <Router>
      <ParentIndex path="/" />
      <Routines path="routines" />
      <Competitions path="competitions" />
    </Router>
  </div>
);

export default ParentNav;
