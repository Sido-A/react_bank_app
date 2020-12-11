import React from "react";
import "../css/ToggleButton.css";
function ToggleButton({ type }) {
  return (
    <div className="toggleButton">
      <div className="toggleButton__accountSetting">
        <p>{type}</p>
        <div className="toggleButton__toggleButton">
          <span>off</span>
          <label class="toggleButton__switch">
            <input type="checkbox" />
            <span class="toggleButton__slider toggleButton__round"></span>
          </label>
          <span>on</span>
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
