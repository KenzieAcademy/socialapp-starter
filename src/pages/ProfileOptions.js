import React from "react";
import { Link } from "react-router-dom";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu from "../components/menu/Menu";
import DeleteUserButton from "../components/deleteUserButton/DeleteUserButton";
import UpdateAbout from "../components/updateAbout/UpdateAbout";
import { Card } from "antd";
import "./PageStyles.css";

class ProfileOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDeleted: false,
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
        <button className="update-pic">update</button>
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
