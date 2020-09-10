import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
// import { domain, jsonHeaders, handleJsonResponse } from "./constants";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.match.params.id,
    };
  }

  state = {
    loading: true,
  };

  async componentDidMount() {
    const url = "https://socialapp-api.herokuapp.com/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <h3>{console.log(this.props.username)}</h3>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
