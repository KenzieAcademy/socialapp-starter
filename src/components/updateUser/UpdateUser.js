import React from "react";
import Spinner from "react-spinkit";

import "./UpdateUser.css";
import DataService from "../../DataService";

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      about: "",
      displayName: "",
    };
    this.client = new DataService();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.client.updateUser(this.state).then((result) => {
      console.log(result.data);
    });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="UpdateUserForm">
        <h2>Update userinfo</h2>
        <form id="update-form" onSubmit={this.handleUpdate}>
          <label htmlFor="username">Display Name</label>
          <input
            type="text"
            name="displayName"
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
          <label htmlFor="about">About</label>
          <input
            type="text"
            name="about"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Update
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default UpdateUser;
