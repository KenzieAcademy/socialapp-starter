import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import LogoFile from "../../images/book glasses.jpg"
import { Button } from 'semantic-ui-react'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    if (JSON.parse(localStorage.getItem("login")).result) {
      this.username = JSON.parse(localStorage.getItem("login")).result.username
    }
  }
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div className="Menu">

        <img className="logo" src={LogoFile} />
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Button color ='orange'>
            <Link to={"/profile/" + this.username}>
              Profile
              </Link>
              </Button>
            <Button color ='yellow'>
            <Link to="/messagefeed">Message Feed</Link>
            </Button>
            <Button color ='blue'>
            <Link to="/userFeed">User Feed</Link>
            </Button>

            <Button color ="green">
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
            </Button>
            
          </div>
        )}
      </div>
    );
  }
}
export default withAsyncAction("auth", "logout")(Menu);