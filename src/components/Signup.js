import React from "react";
import "../css/Signup.css";
import InputForm from "./InputForm";

function Signup() {
  const signUp = "Sign up";
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
          <InputForm type={signUp} />
        </div>
      </div>
      {/* signup__inner */}
    </div>
  );
}

export default Signup;
