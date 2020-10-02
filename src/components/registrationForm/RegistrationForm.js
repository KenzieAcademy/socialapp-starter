import React from "react";
import Spinner from "react-spinkit";

import "./RegistrationForm.css";
import DataService from "../../services/DataService/DataService";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      displayName: "",
    };

    this.client = new DataService();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    this.client.RegisterUser(this.state).then((result) => {
      return this.setState({
        registered: true,
      });
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    if (this.state.registered) {
      return (
        <div>
          <h3>Thank you for registering!</h3>
        </div>
      );
    }

    return (
      <div className="RegistrationForm">
        <form id="Registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoComplete="off"
            required
            onChange={this.handleChange}
          />
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
          <button className="registerButton" type="submit" disabled={loading}>
            Register
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
