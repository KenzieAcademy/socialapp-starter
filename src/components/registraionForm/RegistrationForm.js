import React from "react";
import "./RegistrationForm.css";
import DataService from "../../DataService";
import { Link } from "react-router-dom";
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: { username: "", password: "", displayName: "" },
      isSubmitted: false,
      badFormData: false,
    };

    this.client = new DataService();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    this.client.registerUser(this.state.userData).then(
      (result) => {
        console.log(result.data);
        this.setState({ isSubmitted: true });
      },
      (res) => {
        this.setState({ badFormData: true });
      }
    );
  };

  handleChange = (e) => {
    let userData = this.state.userData;
    userData[e.target.name] = e.target.value;
    this.setState({ userData });
  };

  render() {
    const { loading, error } = this.props;
    if (this.state.isSubmitted) {
      return (
        <div className="RegisterSucess">
          <h1>Your User Profile has been Created!</h1>
          <h3>please return to </h3>{" "}
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
      );
    }

    if (this.state.badFormData) {
      return (
        <div className="RegistrationForm">
          <h1>Create User Form</h1>
          <h3>Please ensure you are using a unique name.</h3>{" "}
          <h3>Password has at least 3 characters.</h3>
          <h3>Display name has at least 3 characters</h3>
          <form id="Registration-form" onSubmit={this.handleRegistration}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
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
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      );
    }
    return (
      <div className="RegistrationForm">
        <h1>Create User Form</h1>
        <form id="Registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
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
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
