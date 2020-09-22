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
          <h1>Jerry Book</h1>
          <h3>: a site <strong>by</strong> Jerries, <strong>for</strong> Jerries.</h3>
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
          <h1>Jerry Book</h1>
          <h3>A site <strong>by</strong> Jerries, <strong>for</strong> Jerries.</h3>

        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/deleteUser">Delete User</Link>
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
}

export default withAsyncAction("auth", "logout")(Menu);
