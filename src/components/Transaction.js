import React from "react";
import "../css/Transaction.css";
import Transactions from "./Transactions";

function Transaction({ tran }) {
  const { transaction, debit, amount } = tran;

  return (
    <div className="transaction">
      <dt key={transaction.id} className="transaction__title">
        {transaction}
      </dt>
      <dd className="transaction__amount">
        <span className={`symbol ${debit === "+" ? "plus" : "minus"}`}>
          {debit}
        </span>
        {amount}
      </dd>
    </div>
  );
}

export default Transaction;
