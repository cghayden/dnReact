import React from "react";
import { Router } from "@reach/router";
import SignOutButton from "./SignOutButton";
import UserContext from "./UserContext";

const UserTypeRouter = () => (
  <UserContext.Consumer>
    {userData => (
      <div>
        <SignOutButton />
        <Router />
        <h1>implement routing based on user type</h1>
        <p>User: {userData.email}</p>
      </div>
    )}
  </UserContext.Consumer>
);

export default UserTypeRouter;
