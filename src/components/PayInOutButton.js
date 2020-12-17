import React from "react";
import "../css/PayInOutButton.css";

function PayInOutButton({ service, showAndHide }) {
  return (
    <div className="payInOutButton">
      {service === "savings" ? (
        <div className="payInOutButton__right">
          <p onClick={() => showAndHide("-wallet", service)}>Pay in</p>
          <p onClick={() => showAndHide("+wallet", service)}>Pay out</p>
        </div>
      ) : (
        <div className="payInOutButton__right">
          <p onClick={() => showAndHide("+wallet", service)}>Take loan</p>
          <p onClick={() => showAndHide("-wallet", service)}>Pay back</p>
        </div>
      )}
    </div>
  );
}

export default PayInOutButton;
