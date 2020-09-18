import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import Card from "react-bootstrap/Card";
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
      <div class="card" className="Menu">
        <div class="card-header">
          <h1>Clip-tastic! Home of extreme couponing!</h1>
          {this.props.isAuthenticated && (
            <div id="menu-links">
              <Link to="/home">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/messagefeed">Message Feed</Link>
              <Link to="/" onClick={this.handleLogout}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
