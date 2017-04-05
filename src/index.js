import "./assets/bootstrap/dist/toolkit.min.css";
import "./assets/bootstrap/dist/application.css";
import React from "react";
import ReactDOM from "react-dom";
//import { Router, Route, Link, browserHistory } from 'react-router';

import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";
import "./index.css";

import ReduxStore from "./store";

import {getCurrentUser} from './mainAR';

const store = ReduxStore({main : {test : "foo"}});

store.dispatch(getCurrentUser());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
