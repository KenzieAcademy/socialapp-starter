import React, { useState } from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import SocialappService from "../../socialappService.js";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.client = new SocialappService();

    this.state = {
      username: "",
      password: "",
      displayName: "",
    };
  }

  handleRegistration = (e) => {
    e.preventDefault();
    console.log("Tried to register.", this.state);
    this.client.registerUser(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <div>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <div>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>
          <label htmlFor="displayName">DISPLAY NAME</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <div>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>

          <button type="submit" disabled={loading}>
            JOIN
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
