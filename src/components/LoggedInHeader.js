import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import logo from "../img/CH.png";
import "../css/LoggedInHeader.css";
import { userDataContext } from "../Context";

function LoggedInHeader({ toggle }) {
  const userContext = useContext(userDataContext);
  const { state, dispatch } = userContext;

  const signOut = () => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
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
              <NavLink
                onClick={signOut}
                className="loggedInHeader__link"
                to="/"
                exact
              >
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
