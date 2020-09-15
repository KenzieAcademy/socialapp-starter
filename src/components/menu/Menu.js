import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import { userIsAuthenticated } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>World Music App</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">

            {/* <Link to="/registration">Registration</Link> */}

            {/* <Link to={"/profile/"+ this.props.match.params.username}>My Profile</Link> */}
            <Link to="/profile/">My Profile</Link>
            <Link to="/myposts">My Posts</Link>
            <Link to="/messagefeed"> My Postes</Link>

            <Link to="/list-of-users">List of users</Link>

            {/* <Link to="/messagefeed">Message Feed</Link>
            <Link to="/messagefeed"></Link> */}

            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
