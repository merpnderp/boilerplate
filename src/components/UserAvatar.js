import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../assets/img/km.jpg";
import { Popover, PopoverTitle, PopoverContent } from "reactstrap";
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
    return (
      <ul className="nav navbar-nav float-right mr-0 hidden-sm-down ml-2">
        <li className="nav-item ml-2">
          <button
            onClick={e => {
              e.preventDefault();
              this.toggle();
            }}
            className="btn btn-default navbar-btn navbar-btn-avatar"
            id="UserAvatar">
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
            <PopoverTitle>Options</PopoverTitle>
            <PopoverContent>
              <ul>
                <li>
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
        </li>
      </ul>
    );
  }
}

export default connect(({ main: { user } }) => ({ user }))(UserAvatar);
