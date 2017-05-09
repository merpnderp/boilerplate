import React, { Component } from "react";
import viewStore from '../store/ViewStore';
import userStore from '../store/userStore';
// import Brand from "../assets/img/brand.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit() {
    //    this.props.dispatch(signup(this.state.username, this.state.password));
  }

  render() {
    return (
      <div className="container-fluid container-fill-height">
        <div className="container-content-middle">
          <form
            ref={form => this.loginForm = form}
            role="form"
            className="m-x-auto text-center app-login-form"
            onSubmit={e => {
              e.preventDefault();
              this.submit();
            }}
          >

            <a href="../index.html" className="app-brand m-b-lg">
              <img src="/assets/img/brand.png" alt="brand" />
            </a>

            <div className="form-group">
              <input
                className="form-control"
                placeholder="Username"
              />
            </div>

            <div className="form-group m-b-md">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="form-group m-b-md">
              <input
                type="password"
                className="form-control"
                placeholder="Password Again"
              />
            </div>

            {this.props.loginAttemptError
              ? <div className="form-group has-danger">
                <div className="form-control-feedback">
                  Login Failed
                  </div>
              </div>
              : ""}

            <div className="m-b-lg">
              <button className="btn btn-primary" type="submit">
                Sign up{" "}
              </button>
              <a href="" onClick={e=>{e.preventDefault(); viewStore.showLogin()}} className="btn btn-default">Login</a>
              {/*<Link to={`/login`} className="btn btn-default ml-2">
                Login
              </Link>*/}
            </div>

            <footer className="screen-login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;