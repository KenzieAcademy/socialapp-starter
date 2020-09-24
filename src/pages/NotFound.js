import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu";
import { Button, Form, Input, Segment } from 'semantic-ui-react'

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">

        <Menu isAuthenticated={this.props.isAuthenticated} />

        <h1>Page not found for {this.props.location.pathname}</h1>

        <Link to="/">Go Home</Link>
        
        <Button color='orange' onClick={this.handlePosMessage}>
          I think you're lost.  Time to go home.
        </Button >
      </div>

    );
  }
}

export default NotFound;
