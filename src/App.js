import React, { useState, useEffect, useContext } from "react";
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
import { userDataContext } from "./Context";

function App() {
  const [data, setData] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const userContext = useContext(userDataContext);
  const { state, dispatch } = userContext;

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  useEffect(() => {
    const db = "http://localhost:3001";
    const fetchData = async () => {
      await fetch(`${db}/users`)
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    fetchData();
  }, []);

  useEffect(() => {
    // const db = "http://localhost:3001";
    // const fetchData = async () => {
    //   await fetch(`${db}/users`)
    //     .then((res) => res.json())
    //     .then((res) => setData(res));
    // };
    // fetchData();
    console.log("data", data);
  }, [state]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/loans">
            <LoggedInHeader toggle={toggleSettings} />
            <div className="app__inner">
              <Balance color="blue" service="loans" setData={setData} />
              <Transactions service="loans" />
              {showSettings && <Settings />}
            </div>
          </Route>
          <Route path="/savings">
            <LoggedInHeader toggle={toggleSettings} />
            <div className="app__inner">
              <Balance color="green" service="savings" setData={setData} />
              <Transactions service="savings" />
              {showSettings && <Settings />}
            </div>
          </Route>
          <Route path="/wallet">
            <LoggedInHeader toggle={toggleSettings} />
            <div className="app__inner">
              <Balance color="orange" service="wallet" setData={setData} />
              <Transactions service="wallet" />
              {showSettings && <Settings />}
            </div>
          </Route>
          <Route path="/signup">
            <LoginSignupHeader />
            <Signup userData={data} setData={setData} />
          </Route>
          <Route path="/" exact>
            <LoginSignupHeader />
            <Login userData={data} setData={setData} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
