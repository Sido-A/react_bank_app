import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import logo from "../img/CH.png";
import "../css/LoggedInHeader.css";

function LoggedInHeader({ toggle }) {
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
        <nav className="loggedInHeader__right">
          <ul>
            <li>
              <NavLink className="loggedInHeader__link" to="/wallet">
                <span>wallet</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="loggedInHeader__link" to="/savings">
                <span>savings</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="loggedInHeader__link" to="/loans">
                <span>loans</span>
              </NavLink>
            </li>
            <li>
              <a onClick={toggle} className="loggedInHeader__link">
                <span>settings</span>
              </a>
            </li>
            <li>
              <NavLink className="loggedInHeader__link" to="/" exact>
                <span>sign out</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default LoggedInHeader;
