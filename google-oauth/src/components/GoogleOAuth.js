import React, { Component } from "react";
import GoogleLogin from "./google-buttons/GoogleLogin";
import GoogleLogout from "./google-buttons/GoogleLogout";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

//class based component because user maybe want to keep track of some input state or something like that
class GoogleOAuth extends Component {
  renderAuthButton(name) {
    if (this.props.signedIn) {
      //logged in
      return <GoogleLogin name={name} signOut={this.props.signOut} />;
    } else {
      //logged out
      return <GoogleLogout signIn={this.props.signIn} />;
    }
  }

  getFullName = () => {
    if (this.props.signedIn) {
      const name = this.props.auth.currentUser
        .get()
        .getBasicProfile()
        .getName();
      return name;
    }
    return null;
  };

  render() {
    const name = this.getFullName();
    return <div>{this.renderAuthButton(name)}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.auth.signedIn,
    auth: state.auth.auth,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleOAuth);
