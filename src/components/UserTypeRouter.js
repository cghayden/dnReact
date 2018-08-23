import React from "react";

import SignOutButton from "./SignOutButton";
import UserContext from "./UserContext";

const UserTypeRouter = () => (
  <UserContext.Consumer>
    {userData => (
      <div>
        <h1>implement routing based on user type</h1>
        <p>User: {userData.email}</p>
        <SignOutButton />
      </div>
    )}
  </UserContext.Consumer>
);

export default UserTypeRouter;
