import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from './Payment';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "";
      case false:
        return (
          <a className="ui right floated button primary" href="/auth/google">
            Login With Google
          </a>
        );
      default:
        return (
          <div>
            <span><Payments /></span>
            <span className="ui right floated button primary">Credits: {this.props.auth.credits}</span>
            <span><a className="ui right floated button primary" href="/api/logout">
              Logout
            </a></span>
          </div>
        );
    }
  }
  render() {
    return (
      <div  className="ui clearing segment">
        {this.renderContent()}
        <Link to={this.props.auth ? "/surveys" : "/"} className="ui left floated header">
          App
        </Link>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Header);
