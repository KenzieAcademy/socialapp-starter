import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import DataService from "../../dataService"
import {Input, Button} from 'antd'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      displayName: ""
    };

    this.client = new DataService()
  }

  handleRegistration = e => {
    e.preventDefault();
    this.client.registerUser(this.state).then(result => {
      console.log(result)
      alert(`User ${result.data.user.username} was registered!`)
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
            name="username"
            placeholder="Username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          
          <Input.Password
            name="password"
            placeholder="Password"
            autoFocus
            required
            onChange={this.handleChange}
          />
           <Input
            name="displayName"
            placeholder="Display Name"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <input type='submit' name='Submit' />
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
