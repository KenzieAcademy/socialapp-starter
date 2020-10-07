import React from "react";
import Spinner from "react-spinkit";
import "./registrationForm.css";
import { withAsyncAction } from "../../redux/HOCs";
import DataService from "../../DataService";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      displayName: "",
      password: "",
    };
    this.client = new DataService();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegistration = (e) => {
    let userData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.client.registerUser(this.state).then((result) => {
      console.log(result.data);

      this.props.login(userData);
    });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="displayName">Display Name</label>
          <br />
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <br />
          <br />
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

export default withAsyncAction("auth", "login")(RegistrationForm);
