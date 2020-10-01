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
    let username = false
    if(JSON.parse(localStorage.getItem('login')).result != null){
      username = JSON.parse(localStorage.getItem('login')).result.username
    }
    return (
      <div className="Menu">
        <h1>Convo-Looters</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            {username && <Link to={'/profile/' + username}>Profile</Link>}
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

export default withAsyncAction("auth", "logout")(Menu);
