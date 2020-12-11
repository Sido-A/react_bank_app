import React from "react";
import "../css/PayInOutButton.css";

function PayInOutButton({ service, showAndHide }) {
  return (
    <div className="payInOutButton">
      {service === "savings" ? (
        <div className="payInOutButton__right">
          <p onClick={showAndHide}>Pay in</p>
          <p onClick={showAndHide}>Pay out</p>
        </div>
      ) : (
        <div className="payInOutButton__right">
          <p onClick={showAndHide}>Take loan</p>
          <p onClick={showAndHide}>Pay back</p>
        </div>
      )}
    </div>
  );
}

export default PayInOutButton;
