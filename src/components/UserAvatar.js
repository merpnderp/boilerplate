import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "../assets/img/km.png";
import { logout } from "../mainAR";
//import Brand from "../assets/img/brand-white.png";

class UserAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = { showOptions: false };
  }

  toggle() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  render() {
    const _props = this.props;
    const displayName = _props.user
      ? _props.user.nickname
          ? _props.user.nickname
          : _props.user.username
              ? _props.user.username
              : _props.user.email ? _props.user.email : null
      : null;
    return (
      <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
        <li
          className=""
          onClick={e => {
            e.preventDefault();
            this.toggle();
          }}>
          <button
            className="btn btn-default navbar-btn navbar-btn-avitar"
            id="UserAvatar">
            <span style={{ marginRight: "1rem", color: "rgba(255,255,255,1)" }}>
              {displayName}
            </span>
            <img
              className="img-circle"
              src={Profile}
              alt="User"
              ref={c => {
                this._input = c;
              }}
            />
          </button>
					{/*
          <Popover
            placement="top"
            isOpen={this.state.showOptions}
            toggle={this.toggle.bind(this)}
            target="UserAvatar">
            <PopoverContent>
              <ul className="" style={{ width: "200px" }}>
                <li className="nav-item">
                  <Link to="/Preferences">Preferences</Link>
                </li>
                <li className="nav-item">
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.dispatch(logout());
                    }}>Logout</a>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
					*/}
        </li>
      </ul>
    );
  }
}

export default connect(({ main: { user } }) => ({ user }))(UserAvatar);
