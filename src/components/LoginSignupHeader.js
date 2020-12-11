import React from "react";
import { NavLink } from "react-router-dom";
import "../css/LoginSignupHeader.css";
import logo from "../img/CH.png";

function LoginSignupHeader() {
  return (
    <div className="loginSignupHeader">
      <div className="loginSignupHeader__inner">
        <figure className="loginSignupHeader__logo">
          <img src={`${logo}`} alt="" />
        </figure>
        <nav className="loginSignupHeader__right">
          <NavLink class="loginSignupHeader__link" to="/">
            <span>Login</span>
          </NavLink>
          <span>/</span>
          <NavLink class="loginSignupHeader__link" to="/signup">
            <span>Sign up</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default LoginSignupHeader;
