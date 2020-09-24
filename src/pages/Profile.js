import React from "react";
//import React, { Component } from 'react'
import Menu from "../components/menu/Menu";
import FetchService from "../FetchService";

import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { userIsAuthenticated } from "../redux/HOCs";






class Profile extends React.Component {
  constructor(props) {
   
    super(props);
    this.client = new FetchService();
    this.state = {
      "user": {
        "pictureLocation": null,
        "username": "",
        "displayName": "",
        "about": "",
        "googleId": null,
        "createdAt": "",
        "updatedAt": ""
      },
      "statusCode": ""

    }

  }
  componentDidMount() {
    this.client.getUser(this.props.match.params.username)
      .then((userData) => { this.setState(userData) })
  }

  // handleUpdateUser = (event) => {
  //   event.preventDefault()
    
  //   console.log("HIII")
  // }


  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>My Profile</h2>
        <h3> {this.state.user.username + "  |  @" + this.state.user.displayName}</h3>
             

        <Segment>
          <img src='https://i0.wp.com/theregister.co.nz/wp-content/uploads/converted_files/tumb/images/longform/shutterstock_1059853814-scaled.jpg?resize=1200%2C800&ssl=1'
            height='200 px'
            width='200 px'
          />
        </Segment> 
        
        
        <p> <h2>Display Name:   ({"@" + this.state.user.displayName})</h2></p>
        <p><h2> Username:  {this.state.user.username}</h2></p> 
        <p><h2> About:  {this.state.user.about}</h2></p>
        <p> <h2>Profile created:  {this.state.user.createdAt}</h2></p>
        <p> <h2>Profile updated:  {this.state.user.updatedAt}</h2></p>

        
        
        <Button color="orange" content ='Change Photo' primary />
       

        <Link to={"/profile/updateprofile/" + this.props.match.params.username}>
          <Button content  ='Update My Info' primary  />
        </Link>



      </div>
    );
  }
}

export default userIsAuthenticated(Profile);

