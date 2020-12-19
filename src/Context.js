import React, { createContext, useReducer } from "react";

const initialState = {
  user: [],
};

const userDataContext = createContext(initialState);
const { Provider } = userDataContext;

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: [action.payload],
      };

    case "WALLET_BALANCE":
      const parseWalletPayload = parseFloat(action.payload);
      return {
        ...state,
        user: [{ ...state.user[0], wallet_balance: parseWalletPayload }],
      };

    case "SAVINGS_BALANCE":
      const parseSavingsPayload = parseFloat(action.payload);

      return {
        ...state,
        user: [{ ...state.user[0], savings_balance: parseSavingsPayload }],
      };
    case "LOANS_BALANCE":
      const parseLoansPayload = parseFloat(action.payload);

      return {
        ...state,
        user: [{ ...state.user[0], loans_balance: parseLoansPayload }],
      };
    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { userDataContext, StateProvider };
