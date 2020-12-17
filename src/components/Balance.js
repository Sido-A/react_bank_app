import React, { useState, useEffect, useContext } from "react";
import { newDate } from "../getDate";
import "../css/Balance.css";
import PayInOutButton from "./PayInOutButton";
import avatar from "../img/man_1.png";
import { userDataContext } from "../Context";

function Balance({ color, service, setData }) {
  const [show, setShow] = useState(false);
  const [inputAmount, setInputAmount] = useState(0);
  const [inOrOut, setInOrOut] = useState("+");
  const [typeOfService, setTypeOfService] = useState("");
  const userContext = useContext(userDataContext);
  const { state, dispatch } = userContext;
  const userData = state.user[0];

  useEffect(() => {
    const db = "http://localhost:3001";
    const fetchData = async () => {
      await fetch(`${db}/users`)
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    fetchData();
  }, [state]);

  const showAndHide = (plusOrMinus, serviceType) => {
    setInOrOut(plusOrMinus);
    setTypeOfService(serviceType);
    setShow(!show);
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const calculateWalletAmount = (a, b, type) => {
    if (type === "plus") {
      const amount = (a + b).toFixed(2);
      dispatch({
        type: "WALLET_BALANCE",
        payload: amount,
      });
    } else {
      const amount = (a - b).toFixed(2);
      dispatch({
        type: "WALLET_BALANCE",
        payload: amount,
      });
    }
  };

  const calculateBalanceAmount = (a, b, type) => {
    const capitalServiceType = typeOfService.toUpperCase();
    if (type === "plus") {
      const amount = (a + b).toFixed(2);
      dispatch({
        type: `${capitalServiceType}_BALANCE`,
        payload: amount,
      });
    } else {
      const amount = (a - b).toFixed(2);
      dispatch({
        type: `${capitalServiceType}_BALANCE`,
        payload: amount,
      });
    }
  };

  const submitAmount = (e) => {
    e.preventDefault();
    const currentBalance = userData[`${service}_balance`];
    const walletBalance = userData.wallet_balance;
    const amount = parseFloat(inputAmount);

    switch (inOrOut) {
      case "+wallet":
        calculateWalletAmount(walletBalance, amount, "plus");
        calculateBalanceAmount(currentBalance, amount, "minus");

        setInputAmount(0);

        return setShow(false);
      case "-wallet":
        calculateWalletAmount(walletBalance, amount, "minus");
        calculateBalanceAmount(currentBalance, amount, "plus");
        setInputAmount(0);
        return setShow(false);
    }
  };

  console.log(userData);
  console.log(userData[`${service}_balance`]);
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
