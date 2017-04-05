import React, { Component } from "react";
import { connect } from 'react-redux';
import Login from "./Login";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
	componentWillReceiveProps(props) {
    if (props.user && !this.props.user) {
      this.context.router.history.push("/");
    }
  }

  render() {
    return (
      <div className="container-fluid container-fill-height">
        <div className="container-content-middle">
          <Login showForm="true" />
        </div>
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
};

export default connect(state => {
  return {
    user: state.main.user
  };
})(LoginPage);
