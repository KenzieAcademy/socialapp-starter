import React from "react";
import { Redirect } from 'react-router-dom';
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from "./DataService";



class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginData: {
        username: "",
        displayName: "",
        password: ""
      },
      registered: false
    };
    this.client = new DataService();
  }

  handleRegistration = e => {
    e.preventDefault();
    this.client.registerUser(this.state.loginData);
    this.setState({registered: true});
    };

  handleChange = e => {
    this.setState({loginData: { [e.target.name]: e.target.value }});
  };

  render() {
    const { loading, error } = this.props;
    if (!this.state.registered) {
      return (
        <div className="RegistrationForm">
          <form id="registration-form" onSubmit={this.handleRegistration}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoFocus
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
            <button type="submit" disabled={loading}>
              Registration
            </button>
          </form>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      );
    }
    else {
      return <Redirect to="/login" />
    }
  }
}

export default withAsyncAction("auth", "login")(RegistrationForm);
