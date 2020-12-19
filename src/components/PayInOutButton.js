import React from "react";
import "../css/PayInOutButton.css";

function PayInOutButton({ service, showAndHide }) {
  return (
    <div className="payInOutButton">
      {service === "savings" ? (
        <div className="payInOutButton__right">
          <p
            className="payInOutButton__green"
            onClick={() => showAndHide("-wallet", service)}
          >
            Pay in
          </p>
          <p
            className="payInOutButton__grey"
            onClick={() => showAndHide("+wallet", service)}
          >
            Pay out
          </p>
        </div>
      ) : (
        <div className="payInOutButton__right">
          <p
            className="payInOutButton__blue"
            onClick={() => showAndHide("+wallet", service)}
          >
            Take loan
          </p>
          <p
            className="payInOutButton__grey"
            onClick={() => showAndHide("-wallet", service)}
          >
            Pay back
          </p>
        </div>
      )}
    </div>
  );
}

export default PayInOutButton;
