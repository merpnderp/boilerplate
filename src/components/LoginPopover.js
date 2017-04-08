import React, { Component } from "react";
import { connect } from "react-redux";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Login from "./Login";

class LoginPopover extends Component {

  clickClose() {
    console.log("clicking");
    this.overlay.click();
  }

  render() {
    const popoverClick = (
      <Popover id="login popover">
        {" "}<Login overlayClose={this.clickClose.bind(this)} />
      </Popover>
    );

    return (
      <ul
        id="#js-popoverContent"
        className="nav navbar-nav navbar-right m-r-0 hidden-xs">
        <li />
        <li className="">
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            rootClose={true}
            overlay={popoverClick}>
            <a
              ref={overlay => {
                this.overlay = overlay;
              }}
              href="#"
              className="app-notification">
              Login
            </a>
          </OverlayTrigger>
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
