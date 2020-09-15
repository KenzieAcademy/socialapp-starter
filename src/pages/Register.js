import React, { Component } from "react";
import { render } from "react-dom";
import DataService from "../components/DataService";

class Register extends Component {
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
    this.client.registerUser(this.state).then((result) => {
      alert(result.data);
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="Register">
        <form id="registration" onSubmit={this.handleRegistration}>
          <label htmlFor="name"> User Name: </label>

          <input type="text" name="username" onChange={this.handleChange} />

          <label htmlFor="password"> Password: </label>

          <input type="password" name="password" onChange={this.handleChange} />

          <label htmlFor="displayName"> Display Name: </label>

          <input type="text" name="displayName" onChange={this.handleChange} />

          <button type="submit">Register </button>
        </form>
      </div>
    );
  }
}

export default Register;
