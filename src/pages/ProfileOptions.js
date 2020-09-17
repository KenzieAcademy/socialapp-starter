import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/Menu";
import DeleteUserButton from "../components/deleteUserButton/DeleteUserButton";
import UpdateAbout from "../components/updateAbout/UpdateAbout";

class ProfileOptions extends React.Component {
  constructor() {
    super();

    this.state = {};
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
        <h3>Update Picture :</h3>
        <button className="update-pic">update</button>
        <br />
        <br />
        <h3>Delete User: </h3>
        <DeleteUserButton />
      </div>
    );
  }
}

export default ProfileOptions;
