import React from "react";
import Spinner from "react-spinkit";
import { withRouter } from 'react-router-dom'

// import { withAsyncAction } from "../../redux/HOCs";
import "./RegistrationForm.css";
import DataService from "../../dataService"
// import LoginForm from "../components/loginForm/LoginForm";
// import { Link } from "react-router-dom";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.client = new DataService()
    this.state = {
      username: "",
      password: "",
      displayName: ""
    };
  }

  handleRegistration = e => {
    e.preventDefault();
    this.client.registerUser(this.state).then(result => {
      // alert(JSON.stringify(result.data));
      alert('Success! Please login');
      this.props.history.push('/')

      // this.props.login(this.state)
      // this.setState({
      //   username: "",
      //   password: "",
      //   displayName: ""
      // })
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

export default withRouter(RegistrationForm);
// export default withAsyncAction("auth", "login")(LoginForm);
