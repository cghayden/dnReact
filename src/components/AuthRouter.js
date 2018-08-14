import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import CreateStudio from "./CreateStudio";
import Login from "./Login";

const AuthRoutes = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/CreateUser">Create A User Account</Link>
        </li>
        <li>
          <Link to="/CreateStudio">Create A Studio Account</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
      <Route exact path="/CreateUser" component={CreateUser} />
      <Route exact path="/CreateStudio" component={CreateStudio} />
      <Route exact path="/Login" component={Login} />
    </div>
  </BrowserRouter>
);

export default AuthRoutes;
