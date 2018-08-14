import React from "react";
import { Link } from "react-router-dom";
const AccountChoices = () => (
  <ul>
    <li>
      <Link to="/CreateUser">Create A User Account</Link>
    </li>
    <li>
      <Link to="/CreateStudio">Create A Studio Account</Link>
    </li>
    <li>
      <Link to="/CreateRetail">Create A Retail Account</Link>
    </li>
  </ul>
);

export default AccountChoices;
