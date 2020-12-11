import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import logo from "../img/CH.png";
import "../css/LoggedInHeader.css";

function LoggedInHeader() {
  const history = useHistory();

  // const signOut = () => {
  //   history.push("/");
  // };

  return (
    <header className="loggedInHeader">
      <div className="loggedInHeader__inner">
        <figure className="loggedInHeader__logo">
          <img src={`${logo}`} alt="" />
        </figure>
        <nav className="loginSignupHeader__right">
          <NavLink className="loggedInHeader__link" to="/wallet">
            <span>wallet</span>
          </NavLink>
          <NavLink className="loggedInHeader__link" to="/savings">
            <span>savings</span>
          </NavLink>
          <NavLink className="loggedInHeader__link" to="/loans">
            <span>loans</span>
          </NavLink>
          <NavLink className="loggedInHeader__link" to="/settings">
            <span>settings</span>
          </NavLink>
          <NavLink className="loggedInHeader__link" to="/" exact>
            <span>sign out</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default LoggedInHeader;
