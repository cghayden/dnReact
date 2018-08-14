import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOutButton";

const DancerNav = props => (
  <div>
    <div className="dancerNav">
      {/*for each dancer, make an icon, active or not*/}
      <p className="icon">A</p>
      <p className="icon icon-active">E</p>
      {/*put signout and others in a drop-down actions menu*/}
      {/*Add a Dancer*/}
      {/*Add an Event - comp/conv. */}
      {/* find a retail near you */}
      {/* shop online */}
      <SignOutButton />
    </div>
    <nav className="nav-flex">
      <ul>
        <li>
          <Link to="/routines">Routines</Link>
        </li>
        <li>
          <div className="dropdown-trigger">
            <a id="eventsTab">Events</a>
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/competitions">Competitions</Link>
                </li>
                <li>
                  <Link to="/conventions">Conventions</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link to="/makeup">Makeup</Link>
        </li>
        <li>
          <Link to="/hair">Hair</Link>
        </li>
        <li>
          <Link to="/setup">
            <svg
              className="navSvg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default DancerNav;
