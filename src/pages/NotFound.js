import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu";
import { Button, Form, Input, Segment } from 'semantic-ui-react'
import { userIsAuthenticated } from "../redux/HOCs";
import Globe404 from "../components/images/Globe_404.png"

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">

        <Menu isAuthenticated={this.props.isAuthenticated} />


        <br/>
        <h2><center>Page not found for... {this.props.location.pathname}</center></h2>
        <br/>

        <div className="logo">
          <img src={Globe404} width="250" height="225" />
        </div>
        
        {/* <Button color='orange' ><Link to="/">I think you're lost.  Time to go home.</Link>
           </Button > */}

      </div>

    );
  }
}

export default userIsAuthenticated(NotFound);
