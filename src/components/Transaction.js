import React from "react";
import "../css/Transaction.css";

function Transaction({ tran }) {
  const { transaction, debitcredit, amount } = tran;
  console.log(tran);
  return (
    <div className="transaction">
      <dt className="transaction__title">{transaction}</dt>
      <dd className="transaction__amount">
        <span className={`symbol ${debitcredit === "+" ? "plus" : "minus"}`}>
          {debitcredit}
        </span>
        {amount}
      </dd>
    </div>
  );
}

export default Transaction;
