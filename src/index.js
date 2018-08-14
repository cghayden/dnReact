import "./css/tachyons/display.css";
import "./css/tachyons/spacing.css";
import "./css/tachyons/text-align.css";
import "./css/normalize.css";
import "./css/style.css";

import React from "react";
import { render } from "react-dom";

import App from "./components/App";

render(<App />, document.querySelector("#app"));
