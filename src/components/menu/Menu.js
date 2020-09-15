import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

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
      
        <h1>Kwitter</h1>
        {/* Line 17:9:  img elements must have an alt prop, either with meaningful text, 
            or an empty string for decorative images  jsx-a11y/alt-text
          eslint-disable-next-line to the line before.

        <img className="logo" src="https://lh3.googleusercontent.com/
        LppMZbZiRJQk1fZtTm-l_1InJjFigvxSz8ra2DQ94ADKGKP0Lb_
        rH6p4F2mrCOUAn3CsswpEvNfRKyYnvk7VaUibOdwVM-
        4hPnhb3xVvFvGxlmU3VaEBE9okqxvUWqqu7JXKbpa-gzocCpQJq_4Voy7Lmu4HRoLAwPhQD0WgO_
        3qQEjS4EGPVGcUa-U6NT1XsN7vEFkMhFp_TtaiHwRNmcrJz03maGUSHLxpW3808gkvqlg
        Fgq8Su5HMCBpBh5GhJ2TphpSRwURJBnEGr4pfBL4PJEttdwv0LIlrGAK4b1yfVRoVAsAyic68rSs9oBmlef1
        -naXe41yBNsjm953I19JTYEuIZyvaU6u4VgMlIS0BQdql4cBVPH9iPszWnUMxYo9SPw
        -hbswzB6d6qubOScSXfxoU5NummL6R81y301dUerUt7O1uOYg0wRnRzeEZaLrxanvmL2DLadSwXJ0
        _dqXjgspVG8i_CFj9DHjbS_4W3JABZfRjuE4P0XA92VoOjyjRzDZs9WelpHCM6x7o2ImeMMg7YJ4dMH8o1UdY1-l9
        -qjElX6UgHGoQdYNO9UVAgtf8ArDGFH4yM6qjYSeRJN6bU3i9fmh0fqMK0WmllXDaYHJ93SjeGob09Jhx6sc
        Loy808RuijstcMyfyq6MgipFtpmyTyqrUgIqsphtUiSWdjtrZIWnRM8rQHh9=w636-h212-no?authuser=0" /> */}
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
            <Link to={"/profile" + this.username}>
              Profile
              </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
