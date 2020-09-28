import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";
import Menu from "../menu/Menu";
import DataService from "../../services/DataService";
import GoogleLogin from "../googleLogin/GoogleLogin";



class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
    this.client = new DataService();
  }

  handleLogin = e => {
    e.preventDefault();
    this.client.login(this.state).then (result => {alert (result.data)})
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (

      <div className="hero">
     <div className="menu">
                <Menu />
             
     

            
     <div className="LoginForm">
        <form id="login-form" onSubmit={this.handleLogin}>
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
          <button className="loginButton"type="submit" disabled={loading}>
            Login
          </button>
          <GoogleLogin/>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
      </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);