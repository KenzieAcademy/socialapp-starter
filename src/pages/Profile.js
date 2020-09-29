import React from "react";
//import React, { Component } from 'react'
import Menu from "../components/menu/Menu";
import FetchService from "../FetchService";
// import Noimage from "../components/images/Noimage"

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
      "statusCode": "",
      picture: null

    }

  }
  componentDidMount() {
    this.client.getUser(this.props.match.params.username)
      .then((userData) => {
        this.setState({
          user: userData.user,
          statusCode: userData.statusCode,

        })
      })
  }

  handleSubmitPhoto = (event) => {
    event.preventDefault()
    let formData = this.fileUpload(this.state.picture)
    this.client.setUserPicture(this.state.user.username, formData).then(() => {
      this.client.getUser(this.props.match.params.username).then((userData) => {
        this.setState({
          user: userData.user,
          statusCode: userData.statusCode,
          pictureLocation: userData.user.pictureLocation

        })
      })
    })
  }

  //On file select (button Choose File)
  onFileChange = (event) => {
    let pictureFile;
    console.log(event.target.files)
    if (event.target.files !== undefined) {
      pictureFile = event.target.files[0]
    }
    this.setState({
      picture: pictureFile
    })
    this.fileUpload()
  };


  fileUpload(file) {

    let formData = new FormData()
    formData.append("picture", file)
    console.log(formData);
    return formData
  }

  pictureFile = () => {
    if (this.state.user.pictureLocation !== null) {
      return (
        <div>
          <img src={'https://socialapp-api.herokuapp.com' + this.state.user.pictureLocation}
            height='200 px'
            width='200 px'
          />
        </div>
      )
    } else {
      return (
        <div>
          <img src={'../components/images/Noimage.png'}
            height='200 px'
            width='200 px'
          />
        </div>
      )

    }
  }



  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>My Current Profile</h2>
        <h3> {this.state.user.username + "  |  @" + this.state.user.displayName}</h3>


        <Segment>

          {this.pictureFile()}

        </Segment>


        <form onSubmit={this.handleSubmitPhoto}>

          <input

            name="picture"
            type="file"
            accept="image/png, image/jpeg, image/gif"
            onChange={this.onFileChange}
          />
          <button onClick={this.handleSubmitPhoto}>Save Change</button>
        </form>



        {/* <Button color="orange" content='Change Photo' primary /> */}




        {/* <Button >

          <input type="file" accept="image/*" id="file-input" /> 

        </Button> */}
        <hr/>
        <Link to={"/profile/updateprofile/" + this.props.match.params.username}>
          <Button content='Update My Info' primary />
        </Link>

        <p> Display Name:  {"@" + this.state.user.displayName}</p>
        <p> Useername:  {this.state.user.username}</p>
        <p> About:  {this.state.user.about}</p>
        <p> Profile created:  {this.state.user.createdAt.toString().replace('T',' at ').slice(0, 19)}</p>
        <p> Profile updated:  {this.state.user.updatedAt.toString().replace('T',' at ').slice(0, 19)}</p>
        <p> ImagePath:  {this.state.user.pictureLocation}</p>

      </div>
    );
  }
}

export default userIsAuthenticated(Profile);

