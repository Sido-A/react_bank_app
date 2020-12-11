import React, { useState } from "react";
import "../css/Balance.css";
import PayInOutButton from "./PayInOutButton";
import avatar from "../img/man_1.png";

function Balance({ color, service }) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const newDate = `${day}/${month}/${year}`;

  const showAndHide = () => {
    setShow(!show);
  };

  return (
    <div className="balance">
      <div className={`balance__inner`}>
        <div className={`balance__left  ${color} `}>
          <p className="balance__total">
            3730.<span>21</span>
          </p>
          <p>Balance</p>
        </div>
        {service === "wallet" ? (
          <div className="balance__right">
            <figure>
              <img src={`${avatar}`} alt="" />
            </figure>
            <p>{newDate}</p>
          </div>
        ) : (
          <PayInOutButton service={service} showAndHide={showAndHide} />
        )}
      </div>
      {show === true ? (
        <div className="balance__transfer">
          <input type="number" className="balance__transferInput" />
          <input
            type="submit"
            value="Transfer"
            className="balance__transferSubmit"
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Balance;
