import React, { Component } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import {readFileSync} from 'fs';
//import { logout } from "../mainAR";

class UserAvatar extends Component {

  render() {
    const _props = this.props;

    const displayName = _props.user
      ? _props.user.nickname
          ? _props.user.nickname
          : _props.user.username
              ? _props.user.username
              : _props.user.email ? _props.user.email : "How you have no name?"
      : "Umpossible!";

    const popoverClick = (
      <Popover id="options popover">
        <div className="nav nav-stacked" style={{ width: "200px" }}>
          <li className="">
            <Link to="/Preferences">Preferences</Link>
          </li>
          <li className="">
            <a
              href=""
              onClick={e => {
                e.preventDefault();
//                this.props.dispatch(logout());
              }}>Logout</a>
          </li>
        </div>
      </Popover>
    );

    return (
      <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
        <li className="">
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            rootClose={true}
            overlay={popoverClick}>
            <button
              className="btn btn-default navbar-btn navbar-btn-avitar"
              id="UserAvatar">
              <span
                style={{ marginRight: "1rem", color: "rgba(255,255,255,1)" }}>
                {displayName}
              </span>
              <img
                className="img-circle"
                src="assets/img/km.png"
                alt="User"
                ref={c => {
                  this._input = c;
                }}
              />
            </button>
          </OverlayTrigger>
        </li>
      </ul>
    );
  }
}

export default UserAvatar;
