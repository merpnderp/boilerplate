import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import makeChangeProps from "../stateHelper";
import { signup } from "../mainAR";
import Brand from "../assets/img/brand.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(props) {
    if (props.signupSuccess && !this.props.signupSuccss) {
      this.context.router.history.push("/login");
    }
  }

  submit() {
    this.props.dispatch(signup(this.state.username, this.state.password));
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
              <img src={Brand} alt="brand" />
            </a>

            <div className="form-group">
              <input
                className="form-control"
                placeholder="Username"
                {...makeChangeProps(this, "username")}
              />
            </div>

            <div className="form-group m-b-md">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...makeChangeProps(this, "password")}
              />
            </div>

            <div className="form-group m-b-md">
              <input
                type="password"
                className="form-control"
                placeholder="Password Again"
                {...makeChangeProps(this, "password2")}
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
              <Link to={`/login`} className="btn btn-default ml-2">
                Login
              </Link>
            </div>

            <footer className="screen-login" />
          </form>
        </div>
      </div>
    );
  }
}

Signup.contextTypes = {
  router: React.PropTypes.object
};

export default connect(state => {
  return {
    loggingIn: state.main.loggingIn,
    loginAttemptError: state.main.loginAttemptError,
    signupSuccess: state.main.signupSuccess
  };
})(Signup);
