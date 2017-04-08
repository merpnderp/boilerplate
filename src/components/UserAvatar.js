import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "../assets/img/km.png";
import { Popover, PopoverContent } from "reactstrap";
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
      <ul className="nav navbar-nav float-right mr-0 hidden-sm-down ml-2">
        <li
          className="nav-item ml-2"
          onClick={e => {
            e.preventDefault();
            this.toggle();
          }}>
          <button
            className="btn btn-default navbar-btn navbar-btn-avatar"
            id="UserAvatar">
            <span style={{ marginRight: "1rem" }}>
              {displayName}
            </span>
            <img
              className="rounded-circle"
              src={Profile}
              alt="User"
              ref={c => {
                this._input = c;
              }}
            />
          </button>
          <Popover
            placement="top"
            isOpen={this.state.showOptions}
            toggle={this.toggle.bind(this)}
            target="UserAvatar">
            <PopoverContent>
              <div className="nav nav-stacked" style={{ width: "200px" }}>
                <li>
                  <Link to="/Preferences">Preferences</Link>
                </li>
                <li>
                  <a
                    href=""
                    onClick={e => {
                      e.preventDefault();
                      this.props.dispatch(logout());
                    }}>Logout</a>
                </li>
              </div>
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    );
  }
}

export default connect(({ main: { user } }) => ({ user }))(UserAvatar);
