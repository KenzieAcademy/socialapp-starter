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
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="Body">
        <div className="LoginForm">
          <form id="login-form" onSubmit={this.handleLogin}>
            <label htmlFor="username">Username</label>
            <div className="UsernameInput">
              <input
                type="text"
                name="username"
                value={this.props.username}
                autoFocus
                required
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div>- - - - - - - - - - - - - - - - - - - - - - - - -</div>
            <label htmlFor="password">Password</label>
            <div className="PasswordInput">
              <input
                type="password"
                name="password"
                value={this.props.password}
                required
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div>- - - - - - - - - - - - - - - - - - - - - - - - -</div>
            <div className="LoginButton">
              <input type="submit" value="Enter" disabled={loading} />
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
