import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPopover from "./LoginPopover";
import UserAvatar from "./UserAvatar";

import Brand from "../assets/img/brand-white.png";

function NavBar(props) {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top app-navbar">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">
            <img src={Brand} alt="brand" />
          </a>
        </div>
        <div id="navbar-collapse-main" className="navbar-collapse collapse ">
          <ul className="nav navbar-nav hidden-xs">
            <li className="active">
              <a className="" href="index.html">Home</a>
            </li>
            <li className="">
              <a className="" href="profile/index.html">Profile</a>
            </li>
            <li className="">
              <a className="" data-toggle="modal" href="#msgModal">
                Messages
              </a>
            </li>
            <li className="">
              <a className="" href="docs/index.html">Docs</a>
            </li>
          </ul>
          {props.gettingCurrentUser
            ? ""
            : props.user ? <UserAvatar /> : <LoginPopover />}
          <form className="navbar-form navbar-right app-search">
            <div className="form-group">
              <input
                style={{  }}
                name="searchFieldName"
                id="SearchFieldID"
                className="form-control grow pull-right"
                type="text"
                data-action="grow"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default connect(({ main: { gettingCurrentUser, user } }) => ({
  gettingCurrentUser,
  user
}))(NavBar);

/*
  export default connect(
  state => { return {
    test: state.main.test,
    user: state.main.user
  }}
)(NavBar);
*/
