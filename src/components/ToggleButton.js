import React from "react";
import "../css/ToggleButton.css";
function ToggleButton({
  type,
  blockAccount,
  setBlockAccount,
  roundExpense,
  setRoundExpense,
}) {
  const splitTypeString = type.split(" ");
  const getZeroString = splitTypeString[0];

  const checkCheckedStatus = () => {
    if (getZeroString === "Block") {
      setBlockAccount(!blockAccount);
    } else {
      setRoundExpense(!roundExpense);
    }
  };

  return (
    <div className="toggleButton">
      <div className="toggleButton__accountSetting">
        <p>{type}</p>
        <div className="toggleButton__toggleButton">
          <span>off</span>
          <label className="toggleButton__switch">
            <input type="checkbox" onChange={checkCheckedStatus} />
            <span className="toggleButton__slider toggleButton__round"></span>
          </label>
          <span>on</span>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
