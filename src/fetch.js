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



const patchWalletBalance = async (id, transactionData) => {
  console.log("patch wallet balance");
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

const patchWalletTransactions = async (id, transactionData) => {
    console.log(transactionData);
    const requestPost = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ wallet_transactions: [transactionData] }),
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

const patchServiceOrLoansBalance = async (
  id,
  serviceBalance,
  transactionAmount
) => {
  console.log(transactionAmount);
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

export {
  addUser,
  patchWalletBalance,
  patchWalletTransactions,
  patchServiceOrLoansBalance,
}
