const initialData = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  avator: "",
  wallet_balance: 5000,
  savings_balance: 0,
  loans_balance: 0,
  wallet_transactions: [],
  savings_transactions: [],
  loans_transactions: [],
};

const URL = "http://localhost:3001";

const addUser = async (userData) => {
  console.log(userData);
  const requestPost = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...initialData, ...userData }),
  };
  return await fetch(`${URL}/users`, requestPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error);
};
// WALLET BALANCE
const patchWalletBalance = async (id, transactionData) => {
  const requestPost = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ wallet_balance: parseFloat(transactionData) }),
  };
  return await fetch(`${URL}/users/${id}`, requestPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error);
};

// WALLET TRANSACTIONS
const postWalletTransactions = async (id, transactionData) => {
  console.log(transactionData);
  const requestPost = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ wallet_transactions: transactionData }),
  };
  return await fetch(`${URL}/users/${id}`, requestPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error);
};

// BALANCE
const patchSavingsOrLoansBalance = async (
  id,
  serviceBalance,
  transactionAmount
) => {
  const requestPost = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ [serviceBalance]: parseFloat(transactionAmount) }),
  };
  return await fetch(`${URL}/users/${id}`, requestPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error);
};

//SAVINGS OR LOANS TRANSACTIONS
const postSavingsOrLoansServiceTransactions = async (
  id,
  transactionData,
  service
) => {
  console.log(transactionData);
  const requestPost = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ [`${service}_transactions`]: transactionData }),
  };
  return await fetch(`${URL}/users/${id}`, requestPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error);
};

const postTransactions = async (id, transactionData) => {
  console.log(transactionData);
  const requestPost = {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(transactionData),
  };
  return await fetch(`${URL}/users/${id}`, requestPost)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw "Oops something went wrong!";
      }
    })
    .catch((error) => error);
};
export {
  addUser,
  patchWalletBalance,
  postWalletTransactions,
  patchSavingsOrLoansBalance,
  postSavingsOrLoansServiceTransactions,
  postTransactions,
};
