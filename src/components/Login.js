import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import makeChangeProps from "../stateHelper";
import { login } from "../mainAR";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: false };
  }

  componentWillReceiveProps(props) {
    if (props.user && !this.props.user) {
      this.context.router.push("/");
    }
  }

  submit(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    const formClass = `m-x-auto text-center ${this.props.showForm
      ? "app-login-form"
      : ""}`;
    return (
      <form
        ref={form => this.loginForm = form}
        role="form"
        className={formClass}
        onSubmit={this.submit.bind(this)}>
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
        {this.props.loginAttemptError
          ? <div className="form-group has-danger">
              <div className="form-control-feedback">
                Login Failed
              </div>
            </div>
          : undefined}

        <div
          className="m-b-lg"
          onClick={() => {
						this.props.overlayClose();
            console.log("click", this.props.overlay);
          }}>
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
          <Link to={`/signup`} className="btn btn-default ml-2">
            Sign up
          </Link>
        </div>

        <footer className="screen-login">
          <a href="#" className="text-muted">Forgot password</a>
        </footer>
      </form>
    );
  }
}
Login.contextTypes = {
  router: React.PropTypes.object
};

export default connect(
  state => {
    return {
      user: state.main.user,
      loggingIn: state.main.loggingIn,
      loginAttemptError: state.main.loginAttemptError
    };
  },
  { login }
)(Login);
