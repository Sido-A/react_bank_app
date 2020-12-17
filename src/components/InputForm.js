import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/InputForm.css";
import avatar from "../img/man_1.png";
import { addUser } from "../fetch";

function InputForm({ type }) {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const [inputForm, setInputForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  useEffect(() => {
    if (
      inputForm.firstname !== "" &&
      inputForm.lastname !== "" &&
      inputForm.email !== "" &&
      inputForm.password !== "" &&
      inputForm.confirmpassword !== ""
    ) {
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

  const submitSignUp = (e) => {
    e.preventDefault();
    if (type === "sign up") {
      if (inputForm.password === inputForm.confirmpassword) {
        addUser(inputForm);
        history.push("/");
        window.location.reload();

        alert(`
        You are registered now.
        Please enter your address and password to login.
        `);
      }
    } else if (type === "save") {
      console.log("save button");
    }
  };

  return (
    <div className="inputForm">
      <div className="inputForm__signupForm">
        <form className="inputForm__signupFormInner" onSubmit={submitSignUp}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            onChange={inputHandler}
            value={inputForm.firstname}
            id="firstName"
            name="firstname"
            className="signupInput inputForm__firstName"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            onChange={inputHandler}
            value={inputForm.lastname}
            id="lastName"
            name="lastname"
            className="signupInput inputForm__lastName"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={inputHandler}
            value={inputForm.email}
            id="email"
            name="email"
            className="signupInput inputForm__email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={inputHandler}
            value={inputForm.password}
            id="password"
            name="password"
            className="signupInput inputForm__password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            onChange={inputHandler}
            value={inputForm.confirmpassword}
            id="confirmPassword"
            name="confirmpassword"
            className="signupInput inputForm__confirmPassword"
          />

          <div className="inputForm__avatar">
            <div className="inputForm__avatarLeft">
              <p>Upload avatar</p>
              <div className="inputForm__avatar">
                <label htmlFor="avatar">Upload</label>
                <input id="avatar" type="file" />
              </div>
            </div>
            <div className="inputForm__avatarRight">
              <figure>
                <img src={`${avatar}`} alt="" />
              </figure>
            </div>
          </div>
          <input
            type="submit"
            value={`${type}`}
            className="inputForm__submit"
            disabled={disabled}
          />
        </form>
      </div>
    </div>
  );
}

export default InputForm;
