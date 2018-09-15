import React from "react";

import { Link } from "@reach/router";
import SignOutButton from "../SignOutButton";

const StudioNav = props => (
  <div>
    <nav className="nav pv3">
      <Link to="./">Home</Link>
      <Link to="classes">Classes</Link>
      <Link to="dancers">Dancers</Link>
      <Link to="competitions">Competitions</Link>
      <Link to="actions">Actions</Link>
      <SignOutButton />
    </nav>
  </div>
);

export default StudioNav;
