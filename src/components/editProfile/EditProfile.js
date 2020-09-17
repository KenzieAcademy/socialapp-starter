import React from "react";
import Spinner from "react-spinkit";
import DataService from "../";
import "./EditProfile.css";
import { Button } from 'antd';

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "userData": {
        "username": "",
        "displayName": "",
        "about": "",
        "createdAt": "",
        "updatedAt": "",
        "pictureLocation": "",
        "googleId": "",
      }
    }
      
    
  };

  // handleProfile = e => {
  //   e.preventDefault();
  //   this.props.profile(this.state);
  // };
  patchEditProfile(){
    return this.client.editProfile().then(result => {
      this.setState({
        post :result.data[""]
      })
      console.log(this.state.data.patch)
    })
  }



  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  
  



  render() {
    const { loading, error } = this.props;
    return (
      <div className="CreateProfile">
        <form id="create-profile">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Displayname</label>
          <input
            type="text"
            name="text"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="about">AboutMe</label>
          <input
            type="text"
            name="text"
            required
            onChange={this.handleChange}
          />
          <Button onClick= {this.handleBioProfile}type = "primary" disabled ={loading}>Create Bio </Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default EditProfile;