import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username || "",
      password: this.props.password || "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", this.state.username);
    localStorage.setItem("password", this.state.password);
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="LoginFormBody">
        <div className="LoginForm">
          <form id="login-form" onSubmit={this.handleLogin}>
            <div className="LogUserNameInput">
              <label htmlFor="username">Username</label>
              <div className="LogUserNameInputBox">
                <input
                  type="text"
                  name="username"
                  value={this.props.username}
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="LogPasswordInput">
              <label htmlFor="password">Password</label>
              <div className="LogPasswordInputBox">
                <input
                  type="password"
                  name="password"
                  value={this.props.password}
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="LogEnterButtonBox">
              <div className="LogEnterButton">
                <input
                  type="submit"
                  value=""
                  title="Enter"
                  onClick={this.handleLogin}
                  disabled={loading}
                ></input>
              </div>
            </div>
          </form>
          {loading && <Spinner name="circle" color="red" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
