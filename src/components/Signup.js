import React from "react";
import "../css/Signup.css";
import InputForm from "./InputForm";

function Signup({ userData }) {
  const signUp = "sign up";
  return (
    <div className="signup">
      <div className="signup__inner">
        <div className="signup__header">
          <a href="/">
            <span>Back</span>
          </a>
          <span>Sign up</span>
        </div>
        <div className="signup__formInner">
          <InputForm type={signUp} userData={userData} />
        </div>
      </div>
      {/* signup__inner */}
    </div>
  );
}

export default Signup;
