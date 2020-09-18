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
    this.client.updateUser(this.state);
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="profileupdatepage">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div>
          <h1>Update Profile:</h1>
          <form id="Registration-form" onSubmit={this.handleUpdate}>
            <label htmlFor="about">About you</label>
            <input
              className="aboutyou"
              type="text"
              name="about"
              autoFocus
              required
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              name="displayName"
              required
              onChange={this.handleChange}
            />
            <button type="submit" disabled={loading}>
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(ProfileUpdateForm);
