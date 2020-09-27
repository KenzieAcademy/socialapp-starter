import React from "react";
import { Link } from "react-router-dom";
import { Button, } from 'semantic-ui-react'
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import { userIsAuthenticated } from "../../redux/HOCs";
import GlobeLogo from "./assets/Globe01sm.png"


class Menu extends React.Component {
  constructor(props) {
    super(props);

    if (JSON.parse(localStorage.getItem('login')).result) {
      this.username = JSON.parse(localStorage.getItem('login')).result.username;
    }

  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {

    return (
      <div className="Menu">

        <div className="logo">
          <img src={GlobeLogo} width="125" height="110" />
        </div>

        <h1>W o r l d . M u s i c . C o a l i t i o n</h1>
        {/* // conditional renderin : if isIdentificated, then show the links  */}
        {this.props.isAuthenticated && (
          <div id="menu-links">

            <div>
            <Button.Group widths='6'>
                <Button color='yellow'>
                  <Link to="/Homepage" >
                    Homepage
                     </Link>
                </Button>

                <Button color='orange'>
                  <Link to="/messagefeed">
                    Messages
                  </Link>
                </Button>

                <Button color='green'>
                  <Link to={"/profile/" + this.username}>
                    Profile
                    </Link>
                </Button>

                <Button color='blue'>
                  <Link to={"/profile/updateprofile/" + this.username}>
                    UpDate Profile
                  </Link>
                </Button>

                <Button color='red'><Link to="/userfeed/">World Music Members</Link></Button>
                <Button color='violet' text="white">
                  <Link to="/Logout/" onClick={this.handleLogout}>
                    Logout</Link>
                </Button>
              </Button.Group>

            </div>

          </div>

         )} 
      </div>)
  }
}
// export default ("auth", "logout")(Menu);
export default withAsyncAction("auth", "logout")(Menu);
