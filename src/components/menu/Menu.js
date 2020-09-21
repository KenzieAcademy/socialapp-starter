import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    if(this.props.loggedIn) {
      // const loginData = JSON.parse(localStorage.getItem("login"));
      // const profileURL = "/profile/" + loginData.result.username
      return (
        <div className="Menu">
          <h1>Kwitter</h1>
          {this.props.isAuthenticated && (
            <div id="menu-links">
              <Link to="/">Profile</Link>
              <Link to="/messagefeed">Message Feed</Link>
              <Link to="/userlist">User List</Link>
              <Link to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            </div>
          )}
        </div>
      );
    }
  else {
    return (
      <div className="Menu">
        <h1>Kwitter</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messagefeed">Message Feed</Link>
          </div>
        )}
      </div>
    );
  }
  }
}

export default withAsyncAction("auth", "logout")(Menu);
