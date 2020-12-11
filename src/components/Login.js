import React, { useState } from "react";
import "../css/Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__inner">
        <div className="login__header">
          <span>Login</span>
        </div>
        <div className="login__loginForm">
          <div className="login__loginFormInner">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="login__email loginInput"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="login__password loginInput"
            />
            <input
              type="submit"
              value="Login"
              className="login__submit"
              disabled
            />
            <a href="/signup" className="login__signup">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
