import React from "react";
//import React, { Component } from 'react'
import Menu from "../components/menu/Menu";
import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>My Profile</h2>

        <Segment>
          <img src='https://i0.wp.com/theregister.co.nz/wp-content/uploads/converted_files/tumb/images/longform/shutterstock_1059853814-scaled.jpg?resize=1200%2C800&ssl=1' 
          height='200 px'
          width='200 px'
          /> 
        </Segment>
        <p> Display Name: </p>
        <Button content='Change Photo' primary /> 
        
        <Button content='Update My Info' primary />

        </div>
    );
  }
}

export default userIsAuthenticated(Profile);
