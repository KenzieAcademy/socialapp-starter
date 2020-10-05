
import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";

import Avatar from "../components/avatar/Avatar"
import GetUsers from "../components/getUsers/GetUsers";
import DeleteUser from "../components/deleteUser/DeleteUser";
import GetProfile from '../components/getProfile/GetProfile';
import UpdateUser from '../components/updateUser/UpdateUser'
import ProfileMessages from "../components/profileMessages/ProfileMessages"
import "./Profile.css"



class Profile extends React.Component {

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <br/>
        <br/>
        <div className="profile-box-left">
          {/* <div className="profile-content"> */}
          <div className="card">
            <div className="cardAvatar">
              <Avatar isAuthenticated={this.props.isAuthenticated} />
            </div>
          </div>
          <div className="card">
            <GetProfile isAuthenticated={this.props.isAuthenticated} />
          </div>
          <div className="card">
            <UpdateUser isAuthenticated={this.props.isAuthenticated} />
            <br />
            <DeleteUser isAuthenticated={this.props.isAuthenticated} />
          </div>
          {/* </div> */}
          <br />
          
        </div>
        <div className="profile-box-right">
          <GetUsers isAuthenticated={this.props.isAuthenticated} />
        </div>
        <br />
       
        <br />
        <ProfileMessages isAuthenticated={this.props.isAuthenticated} />
      </div>

    )
  }
}

export default userIsAuthenticated(Profile);