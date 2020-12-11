import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../img/CH.png";
import "../css/LoggedInHeader.css";

function LoggedInHeader() {
  return (
    <header className="loggedInHeader">
      <div className="loggedInHeader__inner">
        <figure className="loggedInHeader__logo">
          <img src={`${logo}`} alt="" />
        </figure>
        <nav className="loginSignupHeader__right">
          <NavLink class="loggedInHeader__link" to="/wallet">
            <span>wallet</span>
          </NavLink>
          <NavLink class="loggedInHeader__link" to="/savings">
            <span>savings</span>
          </NavLink>
          <NavLink class="loggedInHeader__link" to="/loans">
            <span>loans</span>
          </NavLink>
          <NavLink class="loggedInHeader__link" to="">
            <span>settings</span>
          </NavLink>
          <NavLink class="loggedInHeader__link" to="/">
            <span>sign out</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default LoggedInHeader;
