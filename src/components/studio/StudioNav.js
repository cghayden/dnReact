import React from "react";

import { Router, Link } from "@reach/router";
import SignOutButton from "../SignOutButton";
import StudioHome from "./StudioHome";
import StudioCompetitions from "./StudioCompetitions";
import Classes from "./Classes";
import Students from "./Students";

const StudioNav = props => (
  <div>
    <div className="parentNav">
      <SignOutButton />
    </div>
    <nav>
      <Link to="students">Students</Link>
      <Link to="classes">Classes</Link>
      <Link to="competitions">Competitions</Link>
    </nav>
    <Router>
      <StudioHome path="/" />
      <Classes path="classes" />
      <StudioCompetitions path="competitions" />
      <Students path="students" />
    </Router>
  </div>
);

export default StudioNav;
