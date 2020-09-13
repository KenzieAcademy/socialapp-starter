import React from "react";
import { Link } from "react-router-dom";
import { Button,} from 'semantic-ui-react'
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import GlobeLogo from "./assets/Globe01sm.png"

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">

        <div className="logo">
          <img src={GlobeLogo} width="125" height="110" />
          {/* $('.GlobeLogo')
                .transition('jiggle')
            ; */}
            
        </div>

        <h1>World Music Coalition</h1>
        {this.props.isAuthenticated && (

          // <div id="menu-links">
          //   <Link to="/home">Home</Link>
          //   <Link to="/messagefeed">Message Feed</Link>
          //   <Link to="/updateprofile">Update Profile</Link>
          // <Link to="/" onClick={this.handleLogout}>
          //   Logout
          // </Link>
          // </div>

          // let ButtonExampleGroupFloated = () => 
          // (
          <div>
            <Button.Group widths='5'>
              <Button color='yellow'>Home</Button>
              <Button color='orange'>Messages</Button>
              <Button color='green'>Profile</Button>
              <Button color='red'>UpDate Profile</Button>

              <Button color='violet' text="white"><Link to="/Logout/" onClick={this.handleLogout}>Logout</Link></Button>

            </Button.Group>

          </div>
        )

        }
      </div>

    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
