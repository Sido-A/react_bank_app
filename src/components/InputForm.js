import React from "react";
import "../css/InputForm.css";
import avatar from "../img/man_1.png";

function InputForm({ type }) {
  return (
    <div className="inputForm">
      <div className="inputForm__signupForm">
        <div className="inputForm__signupFormInner">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="signupInput inputForm__firstName"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="signupInput inputForm__lastName"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="signupInput inputForm__email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="signupInput inputForm__password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="signupInput inputForm__confirmPassword"
          />

          <div className="inputForm__avatar">
            <div className="inputForm__avatarLeft">
              <p>Upload avatar</p>
              <div className="inputForm__avatar">
                <label for="avatar">Upload</label>
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
          />
        </div>
      </div>
    </div>
  );
}

export default InputForm;
