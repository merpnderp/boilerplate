import React, { Component } from "react";

class Preferences extends Component {
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
				<form>
					
				</form>
        </div>
      </div>
    );
  }
}

Preferences.contextTypes = {
  router: React.PropTypes.object
};

export default Preferences;