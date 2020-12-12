import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import "./App.css";
import LoginSignupHeader from "./components/LoginSignupHeader";
import LoggedInHeader from "./components/LoggedInHeader";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";
import Settings from "./components/Settings";

function App() {
  const [data, setData] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  useEffect(() => {
    const db = "db.json";
    const fetchData = async () => {
      await fetch(db)
        .then((res) => res.json())
        .then((res) => setData(res.users));
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/loans">
            <LoggedInHeader toggle={toggleSettings} />
            <div className="app__inner">
              <Balance color="blue" service="loans" />
              <Transactions transactionsData={data} />
              {showSettings && <Settings />}
            </div>
          </Route>
          <Route path="/savings">
            <LoggedInHeader toggle={toggleSettings} />
            <div className="app__inner">
              <Balance color="green" service="savings" />
              <Transactions transactionsData={data} />
              {showSettings && <Settings />}
            </div>
          </Route>
          <Route path="/wallet">
            <LoggedInHeader toggle={toggleSettings} />
            <div className="app__inner">
              <Balance color="orange" service="wallet" />
              <Transactions transactionsData={data} />
              {showSettings && <Settings />}
            </div>
          </Route>
          <Route path="/signup">
            <LoginSignupHeader />
            <Signup />
          </Route>
          <Route path="/" exact>
            <LoginSignupHeader />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
