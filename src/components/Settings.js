import React, { useState } from "react";
import "../css/Settings.css";
import ToggleButton from "./ToggleButton";
import InputForm from "./InputForm";

function Settings() {
  const [blockAccount, setBlockAccount] = useState(false);
  const [roundExpense, setRoundExpense] = useState(false);

  const save = "save";
  const block = "Block account";
  const round = "Round expenses and put to savings account";

  console.log("blockAccount", blockAccount);
  console.log("roundExpense", roundExpense);
  return (
    <div className={`settings `}>
      <div className="settings__inner">
        <div className="settings__header">
          <span>Back</span>
          <p>Settings</p>
        </div>
        <ToggleButton
          type={block}
          blockAccount={blockAccount}
          setBlockAccount={setBlockAccount}
        />
        <ToggleButton
          type={round}
          roundExpense={roundExpense}
          setRoundExpense={setRoundExpense}
        />
        <div className="settingForm">
          <p>User</p>
          <InputForm type={save} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
