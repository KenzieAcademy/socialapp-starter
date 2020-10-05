import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import DataService from "../../DataService";
import { withAsyncAction } from "../../redux/HOCs";

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
      if (result.data.statusCode === 200) {
        alert("You have successfully registered with Convo-Looters! YeeeeeHawwwww!!!")
        this.handleLogin()
        this.setState({username: "", password: "", displayName: ""})
      } else {
        alert("Hmm, something went wrong. Please try again partner.")
      }
    }
    )
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = e => {
    // e.preventDefault();
    this.props.login({username: this.state.username, password:this.state.password});
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
        <form id="registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            value={this.state.username}
            type="text"
            name="username"
            autoFocus
            required
            minLength='3'
            maxLength='20'
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            value={this.state.password}
            type="password"
            name="password"
            required
            minLength='8'
            maxLength='20'
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
          <input
            value={this.state.displayName}
            type="text"
            name="displayName"
            required
            minLength='3'
            maxLength='20'
            onChange={this.handleChange}
          />
          <button className="registerButton"type="submit" disabled={loading}>
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
