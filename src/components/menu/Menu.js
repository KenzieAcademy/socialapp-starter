import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <Link to="/">
          <h1>SPACE SQUIRRELS</h1>
        </Link>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/about">About the Universe</Link>
            <Link to="/play">Let's Play SpaceBallz!</Link>
            <Link to="/meet">Meet the Squirrels</Link>
            <Link to="/logoff" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
<<<<<<< HEAD

{
  /* <a href={"https://www.nasa.gov"}>NASA</a> */
}
=======
>>>>>>> master
