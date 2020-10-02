import React, { Component } from "react";
import { render } from "react-dom";
import DataService from "../components/DataService";
import { withRouter } from "react-router-dom";
import { Input, Button } from "semantic-ui-react";
import '../components/loginForm/LoginForm.css'
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
      console.log(JSON.stringify(result.data));
    });
    this.props.history.push("/profile/:username");
  };


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="Register">
        <form id="registration" onSubmit={this.handleRegistration}>
          <label htmlFor="name"> User Name: </label>

          <Input
            type="text"
            name="username"
            required
            onChange={this.handleChange}
          />

          <label htmlFor="password"> Password: </label>

          <Input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />

          <label htmlFor="displayName"> Display Name: </label>

          <Input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <br/>
          <Button content='Register' type='submit' size='medium' />
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
