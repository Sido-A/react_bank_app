import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../css/Login.css";
import { userDataContext } from "../Context";

function Login({ userData }) {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [inputForm, setInputForm] = useState({ email: "", password: "" });
  const userContext = useContext(userDataContext);
  const { state, dispatch } = userContext;

  useEffect(() => {
    if (inputForm.email !== "" && inputForm.password !== "") {
      setDisabled(false);
    } else {
      setDisabled(!false);
    }
  }, [inputForm]);

  const inputHandler = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const user = userData.filter((user) => user.email === inputForm.email);
    // console.log(user[0]);
    if (user.length !== 0) {
      if (inputForm.password === user[0].password) {
        dispatch({
          type: "LOGIN",
          payload: user[0],
        });
        history.push("/wallet");
      } else {
        alert("Your password or email is incorrect");
      }
    } else {
      alert("Your email is not registered, you need to sign up");
      // history.push("/signup");
    }
  };

  return (
    <div className="login">
      <div className="login__inner">
        <div className="login__header">
          <span>Login</span>
        </div>
        <div className="login__loginForm">
          <form className="login__loginFormInner" onSubmit={submitLogin}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={inputHandler}
              value={inputForm.email}
              required
              className="login__email loginInput"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={inputHandler}
              value={inputForm.password}
              required
              className="login__password loginInput"
            />
            <input
              type="submit"
              value="Login"
              className="login__submit"
              disabled={disabled}
            />
            <a href="/signup" className="login__signup">
              Sign up
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
