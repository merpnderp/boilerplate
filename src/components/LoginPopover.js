import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router";
import { Popover, PopoverTitle, PopoverContent } from "reactstrap";
//import makeChangeProps from "../stateHelper";
import Login from "./Login";

class LoginPopover extends Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: false };
  }
  toggle() {
    this.setState({ showLogin: !this.state.showLogin });
  }

  render() {
    return (
      <ul
        id="#js-popoverContent"
        className="nav navbar-nav float-right mr-0 hidden-sm-down ml-2">
        <li className="nav-item ml-2">
          <a
            id="navBarLogin"
            onClick={e => {
              e.preventDefault();
              this.toggle();
            }}
            className="app-notifications nav-link"
            href="notifications/index.html">
            <span className="icon icon-login" /> Login
          </a>
          <Popover
            placement="top"
            isOpen={this.state.showLogin}
            target="navBarLogin"
            toggle={this.toggle.bind(this)}>
            <PopoverTitle>Login</PopoverTitle>
            <PopoverContent>
              <Login />
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    );
  }
}

export default connect(state => {
  return {
    loggingIn: state.main.loggingIn,
    loginAttemptError: state.main.loginAttemptError
  };
})(LoginPopover);
