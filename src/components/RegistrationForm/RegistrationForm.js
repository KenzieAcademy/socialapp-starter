import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import QuestboardService from "../servicesPage/ServicePage"
import { Link } from "react-router-dom";
import { notification } from 'antd';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      displayName: "",
    };
    this.client = new QuestboardService();
    ;
  }
  handleRegistration = e => {
    e.preventDefault();
    this.client.Register(this.state).then(result => {
      window.location = "/";
      (notification.success({
        message: 'Welcome to the Campaign!',
        description:'Redirecting to Login Page.'
      }))
    })
    .catch(err => notification.error({
      message: 'You Lost Your Dice.',
      description: JSON.stringify(err.message),
    },))
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <input
            type="text"
            name="username"
            placeholder="Insert Username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="displayName"
            placeholder="Insert Display Name"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Insert Password"
            required
            onChange={this.handleChange}
          />
          <br/>
          <button type="submit" disabled={loading}>
            Register
          </button>
        </form>
        <div>
        Or <Link to="/">Login Now!</Link>
       </div> 
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
