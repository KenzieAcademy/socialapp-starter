import React from "react";
import { Link } from "react-router-dom";
import { withAsyncAction } from "../../redux/HOCs";

class MsgNavBar extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="MsgNavBar">
        <h1>
          <span>The Dragon's Den</span>
        </h1>

        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/">Profile</Link>
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(MsgNavBar);
