import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import Spinner from "react-spinkit";
import "../miniLogin/MiniLogin.css";

class MiniLogin extends React.Component {
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

  render() {
    const { loading, error } = this.props;
    return (
      <div className="MiniLoginBodyBox">
        <div className="MiniLoginButton">
          <input
            className="MiniLoginButton"
            type="submit"
            value=""
            title="Enter"
            alt="Enter Button"
            onClick={this.handleLogin}
            disabled={loading}
          ></input>
          {loading && <Spinner name="circle" color="red" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(MiniLogin);
