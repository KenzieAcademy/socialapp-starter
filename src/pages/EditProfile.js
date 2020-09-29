import React from "react";
import DataService from "../dataService";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();

    this.state = {
      userdata: {
        username: "",
        displayname: "",
        aboutme: "",
        picture: null,
      },
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <p>Edit Profile</p>
        <h1>In the Process of being set up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="NewAboutMe"
            placeholder="Change your about me"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="newDisplayName"
            placeholder="Change displayname"
            onChange={this.handleChange}
          />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default EditProfile;
