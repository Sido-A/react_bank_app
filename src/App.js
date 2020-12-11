import React from "react";
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
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/loans">
            <LoggedInHeader />
            <div className="app__inner">
              <Balance color="blue" service="loans" />
              <Transactions />
            </div>
          </Route>
          <Route path="/savings">
            <LoggedInHeader />
            <div className="app__inner">
              <Balance color="green" service="savings" />
              <Transactions />
            </div>
          </Route>
          <Route path="/wallet">
            <LoggedInHeader />
            <div className="app__inner">
              <Balance color="orange" service="wallet" />
              <Transactions />
              <Settings />
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
