import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to="/signin"> Sign In </Link>{" "}
      </li>
      <li>
        <Link to="/"> Landing </Link>{" "}
      </li>
      <li>
        <Link to="/home"> Home </Link>{" "}
      </li>
      <li>
        <Link to="/account"> Account </Link>{" "}
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </div>
);

export default Navigation;
