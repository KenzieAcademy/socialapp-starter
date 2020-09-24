import React from "react";
//import React, { Component } from 'react'
import Menu from "../components/menu/Menu";
import FetchService from "../FetchService";

import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { userIsAuthenticated } from "../redux/HOCs";
import Webcam from 'webcam-easy';

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
        <Button >

        <input type="file" accept="image/*" id="file-input" />
         
        </Button>









        



































        <Link to={"/profile/updateprofile/" + this.props.match.params.username}>
          <Button content='Update My Info' primary />
        </Link>

        <p> Display Name:  {"@" + this.state.user.displayName}</p>
        <p> Useername:  {this.state.user.username}</p>
        <p> About:  {this.state.user.about}</p>
        <p> Profile created:  {this.state.user.createdAt}</p>
        <p> Profile updated:  {this.state.user.updatedAt}</p>












      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
