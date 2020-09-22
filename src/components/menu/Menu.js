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
          {/* $('.GlobeLogo')
                .transition('jiggle')
            ; */}

        </div>

        <h1>World Music Coalition</h1>
        {/* // conditional renderin : if isIdentificated, then show the links  */}
        {this.props.isAuthenticated && (
          <div id="menu-links">

            <div>
              <Button.Group widths='7'>
                <Button color='yellow'>
                  <Link to="/Homepage" >
                    Homepage
                     </Link>
                </Button>

            
               
                

                <Button color='grey'>World Music Members</Button>

                <Button color='orange'><Link to="/messagefeed"> Messages </Link></Button>


                <Button color='green'><Link to={"/profile/" + this.username}>Profile</Link></Button>


                <Button color='blue'> <Link to={"/profile/updateprofile/" + this.username}> UpDate Profile </Link></Button>


                <Button color='red'><Link to="/list-of-users/">List of users</Link></Button>
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
export default withAsyncAction("auth", "logout")(Menu);
