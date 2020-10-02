import React from "react";
import Menu from "../menu/Menu";
import { userIsAuthenticated } from "../../redux/HOCs";
import "./ProfileUpdateForm.css";
import DataService from "../../services/DataService/DataService";

class ProfileUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      about: "",
      displayName: "",
    };
    this.client = new DataService();
  }
  handleUpdate = (e) => {
    e.preventDefault();
    this.client.updateUser(this.state).then((result) => {
      let user = JSON.parse(localStorage.getItem("login")).result;
      let userPath = "/profile/" + user.username;
      return this.props.history.push(userPath);
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading } = this.props;
    return (
      <div className="profileupdatepage">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="profileUpdatePage">
          <h1>Update Profile:</h1>
          <h3>
            Please fill out these three forms then submit to update your profile
          </h3>
          <form id="Registration-form" onSubmit={this.handleUpdate}>
            <label htmlFor="about">About you</label>

            <textarea
              name="about"
              onChange={this.handleChange}
              autoComplete="off"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
              onChange={this.handleChange}
            />
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
              autoComplete="off"
              required
              onChange={this.handleChange}
            />
            <button type="submit" disabled={loading}>
              Update Profile
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileUpdateForm);
