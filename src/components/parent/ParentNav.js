import React from "react";
import { Link } from "@reach/router";
import SignOutButton from "../SignOutButton";
// import Routines from "./Routines";
// import Competitions from "./Competitions";
// import ParentIndex from "./ParentIndex";
// import MyDancers from "./MyDancers";

const ParentNav = props => (
  <div>
    <nav className="nav pv3 ">
      <Link to="./">Home</Link>
      <Link to="routines">Routines</Link>
      <Link to="competitions">Competitions</Link>
      <Link to="dancers">My Dancers</Link>
      <Link to="actions">Actions</Link>
      <Link to="sketchpad">SketchPad</Link>
      <SignOutButton />
    </nav>
  </div>
);

export default ParentNav;
