import React, { useContext } from "react";
import "../css/Transactions.css";
import Transaction from "./Transaction";
import { userDataContext } from "../Context";

function Transactions({ service }) {
  const userContext = useContext(userDataContext);
  const { state, dispatch } = userContext;
  const userData = state.user[0];
  // console.log(`transactions`, userData[`${service}_transactions`]);
  // console.log(`transactions service`,service);
  const transactions = userData[`${service}_transactions`];

  const test = [
    {
      transaction: "Mark & Spanser",
      debitcredit: "+",
      amount: 8.64,
    },
    {
      transaction: "Mark",
      debitcredit: "-",
      amount: 9.64,
    },
  ];
  return (
    <div className="transactions">
      <div className="transactions__inner">
        <div className="transactions__header">
          <div className="transactions__left">
            <h3>Transactions</h3>
            <div className="arrows">
              <span className="transactions__redArrow"></span>
              <span className="transactions__greenArrow"></span>
            </div>
          </div>
          <div className="transactions__right">
            <p>Amount</p>
          </div>
        </div>
        <dl key="transactions__key" className="transactions__items">
          {transactions?.map((tran) => (
            <Transaction tran={tran} />
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Transactions;
