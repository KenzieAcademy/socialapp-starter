import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import DataService from "../../services/DataService";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: null };
    if (this.props.isAuthenticated) {
      this.loggedInUser = new DataService().getUsername();
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>Kwitter</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/mainHub">
              <Icon name="home" size="large" />
            </Link>
            <Link to={`/profile/${this.loginData.result.username}`}>
              <Icon name="user" size="large" />
            </Link>
            <Link to="/" onClick={this.handleLogout}>
              <Icon name="sign-out" size="large" />
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
