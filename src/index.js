import "./css/tachyons/display.css";
import "./css/tachyons/spacing.css";
import "./css/tachyons/text-align.css";
import "./css/normalize.css";
import "./css/style.css";
// import "bulma/css/bulma.css";

import { Router } from "@reach/router";
import React from "react";
import { render } from "react-dom";

import Landing from "./components/Landing";
import Parent from "./components/parent/Parent";
import Studio from "./components/studio/Studio";

render(
  <Router>
    <Landing path="/" />
    <Parent path="/parent/*" />
    <Studio path="/studio/*" />
  </Router>,
  document.querySelector("#app")
);
