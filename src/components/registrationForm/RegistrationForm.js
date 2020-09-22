import React from "react";
import "./RegistrationForm.css";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";

import socialAppService from "../../socialAppService";
// ^^^ Is this import from socialAppService needed? ^^^

class RegistrationForm extends React.Component {

  handleRegistration = event => {
    event.preventDefault();
    this.props.registerUser();
  }

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      displayName: "",
    };
    this.client = new socialAppService();
  }
  handleRegistration = (e) => {
    e.preventDefault();
    this.client.registerUser(this.state).then(result => {
      this.props.login(
        {
          "username": this.state.username,
          "password": this.state.password
        }
      );
    });
  };

  // handleRegistration = (e) => {
  //   e.preventDefault();
  //   this.client.registerUser(this.state).then((result) => {
  //     this.props.login({
  //       username: this.state.username,
  //       password: this.state.password,
  //     }
  //     );
  //   })
  // };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //to clear input field on submit//
  // handleSubmit = () => this.setState({ username: '', password: '', displayName: '' })

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <div>
          <strong>New user? Register here!</strong>
        </div>
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

          <button type="submit" disabled={loading}>
            Register
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(RegistrationForm)
