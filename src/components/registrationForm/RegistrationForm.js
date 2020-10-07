import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import SocialappService from "../../socialappService.js";
import RegisterPopup from "../registerPopup/RegisterPopup";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.client = new SocialappService();

    this.state = {
      username: "",
      password: "",
      displayName: "",
      registered: false,
    };
  }

  handleRegistration = (e) => {
    e.preventDefault();
    console.log("Tried to register.", this.state);
    let registerData = {
      username: this.state.username,
      password: this.state.password,
      displayName: this.state.displayName,
    };
    this.client.registerUser(registerData);
    this.setState({ registered: true });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    let popup = "";
    if (this.state.registered === true) {
      popup = (
        <RegisterPopup
          username={this.state.username}
          password={this.state.password}
        />
      );
    }

    return (
      <div className="RegistrationFormBody">
        {popup}
        <form onSubmit={this.handleRegistration}>
          <div className="RegUserBox">
            <div className="RegUserHeader">
              <label htmlFor="username">Username</label>
            </div>
            <div className="RegUserInput">
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                autoFocus
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="RegPassBox">
            <div className="RegPassHeader">
              <label htmlFor="password">Password</label>
            </div>
            <div className="RegPassInput">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="RegDisplayBox">
            <div className="RegDisplayHeader">
              <label htmlFor="displayName">Display Name</label>
            </div>
            <div className="RegDisplayInput">
              <input
                type="text"
                name="displayName"
                placeholder="Enter Display Name"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="RegButtonBox">
            <div className="RegButton">
              <input
                type="submit"
                value=""
                title="Register"
                disabled={loading}
              ></input>
            </div>
          </div>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
