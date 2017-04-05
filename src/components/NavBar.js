import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPopover from "./LoginPopover";
import UserAvatar from "./UserAvatar";

import Brand from "../assets/img/brand-white.png";

function NavBar(props) {
  return (
    <nav
      className="navbar navbar-toggleable-sm fixed-top navbar-inverse bg-primary app-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src={Brand} alt="brand" />
        </a>
        <div id="navbar-collapse-main" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profile/index.html">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="modal" href="#msgModal">
                Messages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="docs/index.html">Docs</a>
            </li>
          </ul>
          <form className="form-inline float-right hidden-sm-down">
            <input
              name="searchFieldName"
              id="SearchFieldID"
              className="form-control grow"
              type="text"
              data-action="grow"
              placeholder="Search"
            />
          </form>
          {props.gettingCurrentUser
            ? ""
            : props.user ? <UserAvatar /> : <LoginPopover />}
        </div>
      </div>
    </nav>
  );
}

export default connect(({ main: { gettingCurrentUser, user } }) => ({ gettingCurrentUser, user }))(NavBar);

/*
  export default connect(
  state => { return {
    test: state.main.test,
    user: state.main.user
  }}
)(NavBar);
*/
