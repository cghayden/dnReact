import React from "react";
import { Router, Link } from "@reach/router";
import SignOutButton from "../SignOutButton";
import Routines from "./Routines";
import Competitions from "./Competitions";
import ParentIndex from "./ParentIndex";
import MyDancers from "./MyDancers";

const ParentNav = props => (
  <div>
    <nav className="parentNav pv3 ">
      <Link to="routines">Routines</Link>
      <Link to="competitions">Competitions</Link>
      <Link to="dancers">My Dancers</Link>
      <SignOutButton />
    </nav>
    {/* <Router>
      <ParentIndex path="/" />
      <Routines path="routines" />
      <Competitions path="competitions" />
      <MyDancers path="dancers" />
    </Router> */}
  </div>
);

export default ParentNav;
