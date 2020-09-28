import React from "react";
import Spinner from "react-spinkit";
import { Button, Input } from "antd"

import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from '../../dataService';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      displayName: ""
    };
    this.client = new DataService();
  }

  handleRegistration = e => {
    e.preventDefault();
    this.client.registerUser(this.state).then(result => {
      this.props.login(
        {
          "username": this.state.username,
          "password": this.state.password
        }
      );

    })

  };



  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>

          <Input
            addonBefore="Username"
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

          <Input.Password
            addonBefore="Password"
            name="password"
            required
            onChange={this.handleChange}
          />

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(RegistrationForm);
