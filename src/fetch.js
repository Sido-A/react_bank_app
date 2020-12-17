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

const addTransaction = (tran) => {};

export { addUser };
