import React, { Component } from "react";
import {extendObservable, action} from 'mobx';
import { observer } from 'mobx-react';
import viewStore from '../store/ViewStore';
import userStore from '../store/UserStore';
//import { login } from "../mainAR";

const Login = observer(class Login extends Component {

  constructor(props) {
    super(props);

    extendObservable(this, {
      showLogin: false,
      username: '',
      password: '',
      setUsername: action((e)=>this.username = e.target.value),
      setPassword: action((e)=>this.password = e.target.value)
    })

  }

  render() {
    const formClass = `m-x-auto text-center ${this.props.showForm
      ? "app-login-form"
      : ""}`
    return (
      <form
        ref={form => this.loginForm = form}
        role="form"
        className={formClass}
        onSubmit={e => { e.preventDefault(); userStore.login(this.username, this.password) }}>
        <div className="form-group">
          <input
            value={this.username}
            onChange={this.setUsername}
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="form-group m-b-md">
          <input
            value={this.password}
            onChange={this.setPassword}
            type="password"
            className="form-control"
            placeholder="Password"
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
          className="m-b-lg">
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
          <a className="btn btn-default ml-2" href="" onClick={e => { e.preventDefault(); viewStore.showSignup(); }}>Sign up</a>
          {/*<Link to={`/signup`} className="btn btn-default ml-2">
            Sign up
          </Link>*/}
        </div>

        <footer className="screen-login">
          <a href="#" className="text-muted">Forgot password</a>
        </footer>
      </form>
    );
  }
})

export default Login;