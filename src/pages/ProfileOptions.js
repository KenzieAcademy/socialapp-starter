import React from "react";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu";
import DeleteUserButton from "../components/deleteUserButton/DeleteUserButton";
import UpdateAbout from "../components/updateAbout/UpdateAbout";
<<<<<<< HEAD
import PhotoUpload from "../components/photoUpload/PhotoUpload"
=======
import PhotoUpload from "../components/photoUpload/PhotoUpload";
>>>>>>> 1febe8c4029cb35d688e3074e69142dc49fe5e31
import { Card } from "antd";
import "./PageStyles.css";

class ProfileOptions extends React.Component {
  constructor(props) {
    super(props);
    let loginData = JSON.parse(localStorage.getItem("login"));
<<<<<<< HEAD
    
    this.state = {
      username: loginData.result.username,
      userData: [],
=======

    this.state = {
      isDeleted: false,
      username: loginData.result.username,
      loading: false,

>>>>>>> 1febe8c4029cb35d688e3074e69142dc49fe5e31
    };
  }

  handleHome = () => {
    window.location.pathname = "/";
  };

  handleDeleteUserUpdate = () => {
    this.setState({ isDeleted: true });
  };
  render() {
    if (this.state.isDeleted) {
      return (
        <div className="isDeletedScreen">
          <h1>This user profile has been deleted!</h1>
          <h2>Please return to the login page</h2>
          <button onClick={this.handleHome}>Login Page</button>
        </div>
      );
    }
    return (
      <div className="ProfileOptions">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Settings</h2>
        <br />
        <h3>Update About :</h3>
        <UpdateAbout />
        <br />
        <Card
          style={{ textAlign: "left", width: "50%", margin: "left" }}
        ></Card>

        <h3>Update Picture :</h3>
<<<<<<< HEAD
        <PhotoUpload username={this.state.username}/>

        
=======
        <PhotoUpload
          username={this.state.username}
          loading={this.state.loading}
        />

>>>>>>> 1febe8c4029cb35d688e3074e69142dc49fe5e31
        <br />
        <br />

        <h3>Delete User: </h3>
        <DeleteUserButton
          handleDeleteUserUpdate={this.handleDeleteUserUpdate}
        />
        <Card />
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileOptions);
