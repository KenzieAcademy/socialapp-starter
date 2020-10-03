import React from "react";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu";
import DeleteUserButton from "../components/deleteUserButton/DeleteUserButton";
import UpdateAbout from "../components/updateAbout/UpdateAbout";
import { Card } from "antd";

class ProfileOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };
  }
  handleHome = (e) => {
    window.location.pathname = "/";
  };
  render() {
    return (
      <div className="ProfileOptions">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <button onClick={this.handleHome}>Home</button>
        <h2>Settings</h2>
        <br />
        <h3>Update About :</h3>
        <UpdateAbout />
        <br />
        <Card
          style={{ textAlign: "left", width: "50%", margin: "left" }}
        ></Card>
        <h3>Update Picture :</h3>
        <button className="update-pic">update</button>
        <br />
        <br />

        <h3>Delete User: </h3>
        <DeleteUserButton />
        <Card />
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileOptions);
