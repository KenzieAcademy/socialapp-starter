import React from "react";
import Spinner from "react-spinkit";
import "./UpdateUserForm.css";
import DataService from "../../DataService"

class UpdateUserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      about: "",
      displayName: ""
    };
    
    this.client = new DataService()

  }

  handleUpdateUser = e => {
    e.preventDefault();
    this.client.updateUser(this.state).then(result => {
      alert(result.data)
    })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="UpdateUserForm">
        <h1>Update Profile</h1>
        <form id="updateUser-form" onSubmit={this.handleUpdateUser}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoFocus
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
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
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

export default UpdateUserForm;
