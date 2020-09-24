import React from "react";
import { userIsAuthenticated } from "../redux/HOCs"
import DataService from "../services/DataService";
import Menu from "../components/menu/Menu";
import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
  }
  handleDelete = (e) => {
    e.preventDefault();
    this.client
      .deleteUser()
      .then((payload) => {
        console.log(payload);
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="Profile">
        <Menu />
        <h2>Profile Name</h2>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1152887/beasley.png"
          alt="Beasley the Bard"
        />

        <dl>
          <dt>Bio</dt>
          <dd></dd>
          <br />
          <dt>Location</dt>
          <br />
          <dd></dd>
          <dt>Date Joined</dt>
        </dl>
        <button className="DeleteUser" onClick={this.handleDelete}>
          {" "}
          Delete User
        </button>
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
