import React from "react";
import ReactDOM from "react-dom";
import fetch from './fetch';
//Force mobx state updates in explicit actions
import { useStrict } from 'mobx';
useStrict(true);
// import Signup from "./components/Signup";
// import LoginPage from "./components/LoginPage";
// import Preferences from "./components/Preferences";

import { startRouter } from './store/router';
import ViewStore from './store/ViewStore';
import UserStore from './store/UserStore';
import {App} from "./App";

const userStore = UserStore.init(fetch);
const viewStore = ViewStore.init(fetch);

startRouter(viewStore);

ReactDOM.render(
  <App store={ viewStore } />,
  document.getElementById("root")
);
/*ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route path="/" component={App} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={LoginPage} />
      <Route path="/preferences" component={Preferences} />
    </div>
  </Router>,
  document.getElementById("root")
);*/
