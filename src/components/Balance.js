import React, { useState, useEffect, useContext } from "react";
import { newDate } from "../getDate";
import "../css/Balance.css";
import PayInOutButton from "./PayInOutButton";
import avatar from "../img/man_1.png";
import { userDataContext } from "../Context";
import {
  patchWalletBalance,
  patchWalletTransactions,
  patchServiceOrLoansBalance,
} from "../fetch";

function Balance({ color, service, setData }) {
  const [show, setShow] = useState(false);
  const [inputAmount, setInputAmount] = useState(0);
  const [inOrOut, setInOrOut] = useState("+");
  const [typeOfService, setTypeOfService] = useState("");
  const userContext = useContext(userDataContext);
  const { state, dispatch } = userContext;
  const userData = state.user[0];
  console.log(state);
  // useEffect(() => {
  //   // console.log("state.user", state.user);
  //   // console.log("state.user[0]", state.user[0]);
  // }, [state]);

  const showAndHide = (plusOrMinus, serviceType) => {
    setInOrOut(plusOrMinus);
    setTypeOfService(serviceType);
    setShow(!show);
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const calculateWalletAmount = (walletBalance, amount, type) => {
    if (type === "plus") {
      const totalWalletAmount = (walletBalance + amount).toFixed(2);
      const parsedTotalWalletAmount = parseFloat(totalWalletAmount);

      patchWalletBalance(userData.id, parsedTotalWalletAmount);

      dispatch({
        type: "WALLET_BALANCE",
        payload: totalWalletAmount,
      });
    } else {
      const totalWalletAmount = (walletBalance - amount).toFixed(2);
      patchWalletBalance(userData.id, totalWalletAmount);
      dispatch({
        type: "WALLET_BALANCE",
        payload: totalWalletAmount,
      });
    }
  };

  const calculateServiceAndLoansBalanceAmount = (
    currentBalance,
    amount,
    type
  ) => {
    const capitalServiceType = typeOfService.toUpperCase();
    if (type === "plus") {
      const totalServiceOrLoansAmount = (currentBalance + amount).toFixed(2);
      patchServiceOrLoansBalance(
        userData.id,
        `${service}_balance`,
        totalServiceOrLoansAmount
      );

      dispatch({
        type: `${capitalServiceType}_BALANCE`,
        payload: totalServiceOrLoansAmount,
      });
    } else {
      const totalServiceOrLoansAmount = (currentBalance - amount).toFixed(2);
      patchServiceOrLoansBalance(
        userData.id,
        `${service}_balance`,
        totalServiceOrLoansAmount
      );

      dispatch({
        type: `${capitalServiceType}_BALANCE`,
        payload: totalServiceOrLoansAmount,
      });
    }
  };

  const submitAmount = (e) => {
    e.preventDefault();
    const currentBalance = userData[`${service}_balance`];
    const walletBalance = parseFloat(userData.wallet_balance);
    const amount = parseFloat(inputAmount);

    switch (inOrOut) {
      case "+wallet":
        const plusToWalletFromSavingOrLoans = {
          transaction: `From ${service}`,
          debit: "+", // plus to wallet
          amount,
        };
        // dispatch({
        //   type: "WALLET_TRANSACTIONS",
        //   payload: plusToWalletFromSavingOrLoans,
        // });
        patchWalletTransactions(userData.id, plusToWalletFromSavingOrLoans);
        calculateWalletAmount(walletBalance, amount, "plus");
        calculateServiceAndLoansBalanceAmount(currentBalance, amount, "minus");
        setInputAmount(0);

        return setShow(false);
      case "-wallet":
        const minusFromWalletToSavingsOrLoans = {
          transaction: `To ${service}`,
          debit: "-", // minus to wallet
          amount,
        };

        patchWalletTransactions(userData.id, minusFromWalletToSavingsOrLoans);
        calculateWalletAmount(walletBalance, amount, "minus");
        calculateServiceAndLoansBalanceAmount(currentBalance, amount, "plus");
        setInputAmount(0);
        return setShow(false);
    }
  };

  return (
    <div className="balance">
      <div className={`balance__inner`}>
        <div className={`balance__left  ${color} `}>
          <p className="balance__total">{userData[`${service}_balance`]}</p>
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
          <PayInOutButton
            service={service}
            showAndHide={showAndHide}
            setInOrOut={setInOrOut}
          />
        )}
      </div>
      {service !== "wallet" && show === true ? (
        <form className="balance__transfer" onSubmit={submitAmount}>
          <input
            type="number"
            value={inputAmount}
            onChange={amountChangeHandler}
            className="balance__transferInput"
          />
          <input
            type="submit"
            value="Transfer"
            className="balance__transferSubmit"
          />
        </form>
      ) : null}
    </div>
  );
}

export default Balance;
