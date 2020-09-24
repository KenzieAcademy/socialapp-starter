import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { link: "" };
  }

  componentDidMount() {
    this.setState({ link: "/profile/" + localStorage.getItem("user") });
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to={this.state.link}>PROFILE</Link>
            <Link to="/messagefeed">MESSAGE FEED</Link>
            <Link to="/" onClick={this.handleLogout}>
              LOGOUT
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
