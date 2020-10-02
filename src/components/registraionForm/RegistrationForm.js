import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import DataService from "../../DataService";
import { Link } from "react-router-dom";
import { Button } from "antd";
class RegistrationForm extends React.Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      userData: { username: "", password: "", displayName: "" },
      isSubmitted: false,
    };

    this.client = new DataService();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    this.client.registerUser(this.state.userData).then((result) => {
      console.log(result.data);
      this.setState({ isSubmitted: true });
    });
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
        <div>
          user is created return to{" "}
          <Link to="/">
            <button>Login</button>
          </Link>
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
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
