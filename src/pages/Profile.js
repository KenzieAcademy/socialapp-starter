import React from "react";

import Menu from "../components/menu/Menu";
import UserCard from "../components/userCard/UserCard";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageList from "./MessageList";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    let authData = JSON.parse(localStorage.getItem("login"));
    this.state = {
      username: authData.result.username,
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <div className="profile">loading</div>;
    } else {
      return (
        <div className="Profile">
          <Menu isAuthenticated={this.props.isAuthenticated} />
          <h2>Profile</h2>
          <br />
          <UserCard username={this.state.username} />

          <MessageList />
          <br />
        </div>
      );
    }
  }
}

export default userIsAuthenticated(Profile);
