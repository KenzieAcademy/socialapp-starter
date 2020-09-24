import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import Spinner from "react-spinkit";

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
      <div className="LoginButton">
        <input
          type="submit"
          value="Enter"
          onClick={this.handleLogin}
          disabled={loading}
        />
        {loading && <Spinner name="circle" color="red" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(MiniLogin);
