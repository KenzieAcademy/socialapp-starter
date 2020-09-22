import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import LogoFile from "../../images/The Book Nook logo.png"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    if( JSON.parse(localStorage.getItem("login")).result){
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
       
        <img className="logo" src={LogoFile}/>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
            <Link to={"/profile" + this.username}>
              Profile
              </Link>
              <Link to="/userFeed">UserFeed</Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
