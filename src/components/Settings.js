import React from "react";
import "../css/Settings.css";
import ToggleButton from "./ToggleButton";
import InputForm from "./InputForm";

function Settings() {
  const save = "Save";
  const block = "Block account";
  const round = "Round expenses and put to savings account";
  return (
    <div className={`settings `}>
      <div className="settings__inner">
        <div className="settings__header">
          <span>Back</span>
          <p>Settings</p>
        </div>
        <ToggleButton type={block} />
        <ToggleButton type={round} />
        <div className="settingForm">
          <p>User</p>
          <InputForm type={save} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
