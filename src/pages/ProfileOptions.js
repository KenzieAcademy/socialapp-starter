import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu";
import DeleteUserButton from "../components/deleteUserButton/DeleteUserButton";
import UpdateAbout from "../components/updateAbout/UpdateAbout";
import PhotoUpload from "../components/photoUpload/PhotoUpload"
import { Card } from "antd";

class ProfileOptions extends React.Component {
  constructor(props) {
    super(props);
    let loginData = JSON.parse(localStorage.getItem("login"));
    
    this.state = {
      username: loginData.result.username,
      userData: [],
    };
  }
  render() {
    return (
      <div className="ProfileOptions">
        <Link to="/">Go Home</Link>
        <Menu />
        <h2>Settings</h2>
        <br />
        <h3>Update About :</h3>
        <UpdateAbout />
        <br />
        <Card
          style={{ textAlign: "left", width: "50%", margin: "left" }}
        ></Card>

        <h3>Update Picture :</h3>
        <PhotoUpload username={this.state.username}/>

        
        <br />
        <br />

        <h3>Delete User: </h3>
        <DeleteUserButton />
        <Card />
      </div>
    );
  }
}

export default ProfileOptions;
