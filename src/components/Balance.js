import React, { useState, useEffect, useContext } from "react";
import { newDate } from "../getDate";
import "../css/Balance.css";
import PayInOutButton from "./PayInOutButton";
import avatar from "../img/man_1.png";
import { userDataContext } from "../Context";
import {
  patchWalletBalance,
  patchSavingsOrLoansBalance,
  patchTransactions,
} from "../fetch";

function Balance({ color, service, setData }) {
  const [show, setShow] = useState(false);
  const [inputAmount, setInputAmount] = useState(0);
  const [inOrOut, setInOrOut] = useState("+");
  const [typeOfService, setTypeOfService] = useState("");
  const userContext = useContext(userDataContext);
  const { state, dispatch } = userContext;
  const userData = state.user[0];

  // Splitting balance to style after decimal
  const splitBalance = userData[`${service}_balance`].toString().split(".");
  const int = splitBalance[0];
  const decimal = splitBalance[1];
  console.log(decimal);
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
    } else if (type === "minus") {
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
      patchSavingsOrLoansBalance(
        userData.id,
        `${service}_balance`,
        totalServiceOrLoansAmount
      );

      dispatch({
        type: `${capitalServiceType}_BALANCE`,
        payload: totalServiceOrLoansAmount,
      });
    } else if (type === "minus") {
      const totalServiceOrLoansAmount = (currentBalance - amount).toFixed(2);
      patchSavingsOrLoansBalance(
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
    const walletTransactionsId = userData.wallet_transactions.length + 1;
    const savingsTransactionsId = userData.savings_transactions.length + 1;
    const loansTransactionsId = userData.loans_transactions.length + 1;

    switch (inOrOut) {
      case "+wallet":
        // plus to wallet from savings or loans
        const plusToWalletFromSavingOrLoans = {
          id: walletTransactionsId,
          transaction: `From ${service}`,
          debit: "+", // plus to wallet
          amount,
        };

        // to reducer
        dispatch({
          type: "WALLET_TRANSACTIONS",
          payload: plusToWalletFromSavingOrLoans,
        });

        // PATCH to WALLET TRANSACTIONS
        const updatePlusWalletTransactions = {
          wallet_transactions: [
            ...userData.wallet_transactions,
            plusToWalletFromSavingOrLoans,
          ],
        };
        patchTransactions(userData.id, updatePlusWalletTransactions);

        if (service === "savings") {
          // minus from savings to wallet
          const minusFromSavingToWallet = {
            id: savingsTransactionsId,
            transaction: `Took from savings`,
            debit: "-", // plus to savings
            amount,
          };

          // to reducer
          dispatch({
            type: `SAVINGS_TRANSACTIONS`,
            payload: minusFromSavingToWallet,
          });

          // PATCH to SAVINGS TRANSACTIONS
          const updateMinusSavingsTransactions = {
            savings_transactions: [
              ...userData.savings_transactions,
              minusFromSavingToWallet,
            ],
          };
          patchTransactions(userData.id, updateMinusSavingsTransactions);
        } else if (service === "loans") {
          // minus from loans to wallet
          const minusFromLoansToWallet = {
            id: loansTransactionsId,
            transaction: `Loan`,
            debit: "-", // plus to loans
            amount,
          };

          // to reducer
          dispatch({
            type: `LOANS_TRANSACTIONS`,
            payload: minusFromLoansToWallet,
          });

          // PATCH to LOANS TRANSACTIONS
          const updateMinusLoansTransactions = {
            loans_transactions: [
              ...userData.loans_transactions,
              minusFromLoansToWallet,
            ],
          };
          patchTransactions(userData.id, updateMinusLoansTransactions);
        }
        calculateWalletAmount(walletBalance, amount, "plus");
        calculateServiceAndLoansBalanceAmount(currentBalance, amount, "minus");
        setInputAmount(0);

        return setShow(false);
      case "-wallet":
        // plus from wallet to savings or loans
        const minusFromWalletToSavingsOrLoans = {
          id: walletTransactionsId,
          transaction: `To ${service}`,
          debit: "-", // minus to wallet
          amount,
        };

        //to reducer
        dispatch({
          type: "WALLET_TRANSACTIONS",
          payload: minusFromWalletToSavingsOrLoans,
        });

        // PATCH to WALLET TRANSACTIONS
        const updateMinusWalletTransactions = {
          wallet_transactions: [
            ...userData.wallet_transactions,
            minusFromWalletToSavingsOrLoans,
          ],
        };
        patchTransactions(userData.id, updateMinusWalletTransactions);

        if (service === "savings") {
          // plus to savings from wallet
          const plusToSavingFromWallet = {
            id: savingsTransactionsId,
            transaction: `From wallet`,
            debit: "+", // plus to savings
            amount,
          };

          //to reducer
          dispatch({
            type: `SAVINGS_TRANSACTIONS`,
            payload: plusToSavingFromWallet,
          });

          // PATCH to SAVINGS TRANSACTIONS
          const updatePlusSavingsTransactions = {
            savings_transactions: [
              ...userData.savings_transactions,
              plusToSavingFromWallet,
            ],
          };
          patchTransactions(userData.id, updatePlusSavingsTransactions);
        } else if (service === "loans") {
          const plusToSLoansFromWallet = {
            id: loansTransactionsId,
            transaction: `Thanks for payment`,
            debit: "+", // plus to loans
            amount,
          };

          //to reducer
          dispatch({
            type: `LOANS_TRANSACTIONS`,
            payload: plusToSLoansFromWallet,
          });

          // PATCH to LOANS TRANSACTIONS
          const updatePlusLoansTransactions = {
            loans_transactions: [
              ...userData.loans_transactions,
              plusToSLoansFromWallet,
            ],
          };
          patchTransactions(userData.id, updatePlusLoansTransactions);
        }

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
          <p className="balance__total">
            {int}
            <span>.{decimal === undefined ? "00" : decimal}</span>
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
