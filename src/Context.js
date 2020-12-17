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
      console.log(state.user);
      return {
        ...state,
        user: [state.user.wallet_balance, ...action.payload],
      };
    // case "SAVINGS_BALANCE":
    //   return {
    //     ...state,
    //     user: [state.user.savings_balance, ...action.payload],
    //   };
    // case "LOANS_BALANCE":
    //   return {
    //     ...state,
    //     user: [state.user.loans_balance, ...action.payload],
    //   };
    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { userDataContext, StateProvider };
