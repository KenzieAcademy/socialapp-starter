import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import SocialappService from "../../socialappService.js";
import RegisterPopup from "../registerPopup/RegisterPopup";
// import Button from "react-bootstrap/Button";

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
        <div className="RegistrationForm">
          <form id="registration-form" onSubmit={this.handleRegistration}>
            <div className="UserNameInput">
              <label htmlFor="username">Username</label>
              <div className="UserNameInputBox">
                <input
                  type="text"
                  name="username"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="PasswordInput">
              <label htmlFor="password">Password</label>
              <div className="PasswordInputBox">
                <input
                  type="password"
                  name="password"
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="DisplayNameInput">
              <label htmlFor="displayName">Display Name</label>
              <div className="DisplayNameInputBox">
                <input
                  type="text"
                  name="displayName"
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="EnterButtonBox">
              <div className="EnterButton">
                {/* <Button
                  variant="dark"
                  size="lg"
                  type="submit"
                  disabled={loading}
                >Register</Button> */}
                <input
                  type="submit"
                  value="Register"
                  disabled={loading}
                ></input>
              </div>
            </div>
          </form>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
